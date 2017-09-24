import {
  AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit,
  ViewEncapsulation
} from '@angular/core';
import {SnotifyService} from '../snotify.service';
import {SnotifyToast} from './snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyStyle} from '../enums/SnotifyStyle.enum';

@Component({
  selector: 'ng-snotify-toast',
  templateUrl: './toast.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent implements OnInit, OnDestroy, AfterContentInit {
  /**
   * Get toast from notifications array
   */
  @Input() toast: SnotifyToast;

  toastDeletedSubscription: Subscription;
  toastChangedSubscription: Subscription;

  /**
   * Toast state
   * @type {Object}
   */
  state = {
    progress: 0,
    animation: '',
    isDestroying: false,
    promptType: SnotifyStyle.prompt
  };

  /**
   * Toast progress interval
   */
  interval: any;

  constructor(private service: SnotifyService) { }

  // Lifecycles

  /**
   * Init base options. Subscribe to toast changed, toast deleted
   */
  ngOnInit() {
    this.toastChangedSubscription = this.service.toastChanged.subscribe(
      (toast: SnotifyToast) => {
        if (this.toast.id === toast.id) {
          this.initToast(toast);
        }
      }
    );
    this.toastDeletedSubscription = this.service.toastDeleted.subscribe(
      (id) => {
        if (this.toast.id === id) {
          this.onRemove();
        }
      }
    );
    this.toast.eventEmitter.next('init');
  }

  ngAfterContentInit() {
    this.state.animation = 'snotifyToast--in';
    this.initToast();
    setTimeout(() => {
      this.state.animation = this.toast.config.animation.enter;
    }, 10)

  }

  /**
   * Unsubscribe subscriptions
   */
  ngOnDestroy(): void {
    this.toast.eventEmitter.next('destroyed');
    this.toastChangedSubscription.unsubscribe();
    this.toastDeletedSubscription.unsubscribe();
  }

  /*
  Event hooks
   */

  /**
   * Trigger OnClick lifecycle
   */
  onClick() {
    this.toast.eventEmitter.next('click');
    if (this.toast.config.closeOnClick) {
      this.service.remove(this.toast.id);
    }
  }

  /**
   * Trigger beforeDestroy lifecycle. Removes toast
   */
  onRemove() {
    this.toast.eventEmitter.next('hide');
    this.state.isDestroying = true;
    clearInterval(this.interval);
    this.state.animation = this.toast.config.animation.exit;
    setTimeout(() => {
      this.state.animation = 'snotifyToast--out';
      this.toast.eventEmitter.next('hidden');
    }, this.toast.config.animation.time / 4);
  }

  /**
   * Trigger onHoverEnter lifecycle
   */
  onMouseEnter() {
    this.toast.eventEmitter.next('mouseenter');
    if (this.toast.config.pauseOnHover) {
      clearInterval(this.interval);
    }
  }

  /**
   * Trigger onHoverLeave lifecycle
   */
  onMouseLeave() {
    if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
      this.startTimeout(this.state.progress);
    }
    this.toast.eventEmitter.next('mouseleave');
  }

  /**
   * Prompt input value changed
   */
  onPromptChanged(value: string) {
    this.toast.eventEmitter.next('input');
    this.toast.value = value;
  }

  /**
   * Remove toast completely after animation
   */
  onExitTransitionEnd() {
    if (this.state.isDestroying) {
      this.service.remove(this.toast.id, true);
    }
  }

  /*
   Common
   */

  /**
   * Initialize base toast config
   * @param toast {SnotifyToast}
   */
  initToast(toast?: SnotifyToast) {
    if (toast) {
      if (this.toast.config.type !== toast.config.type) {
        clearInterval(this.interval);
      }
      this.toast = toast;
    }
    if (this.toast.config.timeout > 0) {
      this.startTimeout(0);
    } else {
      this.toast.config.showProgressBar = false;
      this.toast.config.pauseOnHover = false;
    }
  }

  /**
   * Start progress bar
   * @param currentProgress {Number}
   */
  startTimeout(currentProgress: number) {
    const refreshRate = 10;
    if (this.state.isDestroying) {
      return;
    }
    this.state.progress = currentProgress;
    const step = refreshRate / this.toast.config.timeout * 100;
      this.interval = setInterval(() => {
        this.state.progress += step;
        if (this.state.progress >= 100) {
          this.service.remove(this.toast.id);
        }
      }, refreshRate);
  }

}
