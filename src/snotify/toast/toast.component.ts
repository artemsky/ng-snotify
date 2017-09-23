import {Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SnotifyService} from '../snotify.service';
import {SnotifyToast} from './snotify-toast.model';
import {SnotifyAction} from '../enums/SnotifyAction.enum';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyStyle} from '../enums/SnotifyStyle.enum';

@Component({
  selector: 'ng-snotify-toast',
  templateUrl: './toast.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent implements OnInit, OnDestroy {
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
    toast: {
      type: '',
      progress: 0,
      animation: '',
      time: 0,
      isDestroying: false
    },
    promptType: SnotifyStyle.prompt,
    prompt: ''
  };

  /**
   * Toast maximum height in pixels
   */
  maxHeight: number;
  /**
   * Toast progress interval
   */
  interval: any;

  constructor(private service: SnotifyService, private snotify: ElementRef) { }

  /*
  Life cycles
   */
  /**
   * Init base options. Subscribe to toast changed, toast deleted
   */
  ngOnInit() {
    this.maxHeight = this.service.config.global.maxHeight;
    this.initToast();
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
    this.state.toast.type = this.toast.config.type;
    this.state.toast.time = this.toast.config.animation.time;
    this.state.toast.animation = this.toast.config.animation.enter;
    this.lifecycle(SnotifyAction.onInit);
  }

  /**
   * Unsubscribe subscriptions
   */
  ngOnDestroy(): void {
    this.lifecycle(SnotifyAction.afterDestroy);
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
    this.lifecycle(SnotifyAction.onClick);
    if (this.toast.config.closeOnClick) {
      this.service.remove(this.toast.id);
    }
  }

  /**
   * Trigger beforeDestroy lifecycle. Removes toast
   */
  onRemove() {
    this.state.toast.isDestroying = true;
    clearInterval(this.interval);
    this.state.toast.animation = this.toast.config.animation.exit;
    this.maxHeight = 0;
    this.lifecycle(SnotifyAction.beforeDestroy);
  }

  /**
   * Trigger onHoverEnter lifecycle
   */
  onMouseEnter() {
    this.lifecycle(SnotifyAction.onHoverEnter);
    if (this.toast.config.pauseOnHover) {
      clearInterval(this.interval);
    }
  }

  /**
   * Trigger onHoverLeave lifecycle
   */
  onMouseLeave() {
    if (this.toast.config.pauseOnHover && this.state.toast.type !== SnotifyStyle.prompt) {
      this.startTimeout(this.state.toast.progress);
    }
    this.lifecycle(SnotifyAction.onHoverLeave);
  }

  /**
   * Prompt input value changed
   */
  onPromptChanged(value: string) {
    this.state.prompt = value;
    this.lifecycle(SnotifyAction.onInput, value)
  }

  /**
   * Remove toast completely after animation
   */
  onExitTransitionEnd() {
    if (this.state.toast.isDestroying) {
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
    if (this.state.toast.isDestroying) {
      return;
    }
    this.state.toast.progress = currentProgress;
    const step = refreshRate / this.toast.config.timeout * 100;
      this.interval = setInterval(() => {
        this.state.toast.progress += step;
        if (this.state.toast.progress >= 100) {
          this.service.remove(this.toast.id);
        }
      }, refreshRate);
  }

  /**
   * Lifecycle trigger
   * @param action {SnotifyAction}
   * @param promptValue {SnotifyAction}
   */
  lifecycle(action: SnotifyAction, promptValue?: string) {
    return this.service.lifecycle.next({
      action,
      toast: this.toast,
      value: promptValue
    });
  }

}
