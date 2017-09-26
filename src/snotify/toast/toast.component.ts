import {
  AfterContentInit, Component, Input, OnDestroy, OnInit,
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
    paused: false,
    progress: 0,
    animation: '',
    isDestroying: false,
    promptType: SnotifyStyle.prompt
  };

  /**
   * Toast progress interval
   */
  interval: any;

  constructor (private service: SnotifyService) {
  }

  // Lifecycles

  /**
   * Init base options. Subscribe to toast changed, toast deleted
   */
  ngOnInit () {
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
    this.state.animation = 'snotifyToast--in';
  }

  ngAfterContentInit () {
    this.toast.eventEmitter.next('beforeShow');
    console.log('beforeShow')
    // this.state.animation = 'snotifyToast--in';
    this.initToast();
    // setTimeout(() => {
    this.state.animation = this.toast.config.animation.enter;
    // }, 10)

  }

  /**
   * Unsubscribe subscriptions
   */
  ngOnDestroy (): void {
    console.log('destroyed')
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
  onClick () {
    this.toast.eventEmitter.next('click');
    if (this.toast.config.closeOnClick) {
      this.service.remove(this.toast.id);
    }
  }

  /**
   * Trigger beforeDestroy lifecycle. Removes toast
   */
  onRemove () {
    console.log('beforeHide')
    this.toast.eventEmitter.next('beforeHide');
    this.state.isDestroying = true;
    clearInterval(this.interval);
    this.state.animation = this.toast.config.animation.exit;
    setTimeout(() => {
      console.log('hidden');
      this.state.animation = 'snotifyToast--out';
      // this.toast.eventEmitter.next('hidden');
      // this.service.remove(this.toast.id, true);
    }, this.toast.config.animation.time);
  }

  /**
   * Trigger onHoverEnter lifecycle
   */
  onMouseEnter () {
    this.toast.eventEmitter.next('mouseenter');
    if (this.toast.config.pauseOnHover) {
      this.state.paused = true;
    }
  }

  /**
   * Trigger onHoverLeave lifecycle
   */
  onMouseLeave () {
    if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
      this.state.paused = false;
      this.startTimeout(this.toast.config.timeout * this.state.progress);
    }
    this.toast.eventEmitter.next('mouseleave');
  }

  /**
   * Prompt input value changed
   */
  onPromptChanged (value: string) {
    this.toast.eventEmitter.next('input');
    this.toast.value = value;
  }

  /**
   * Remove toast completely after animation
   */
  onExitTransitionEnd () {
    if (this.state.isDestroying) {
      return this.service.remove(this.toast.id, true);
    }
    console.log('shown');
    this.state.isDestroying = true;
    this.toast.eventEmitter.next('shown');
  }

  /*
   Common
   */

  /**
   * Initialize base toast config
   * @param toast {SnotifyToast}
   */
  initToast (toast?: SnotifyToast) {
    if (toast) {
      // this.toast = toast;
    }
    if (this.toast.config.timeout > 0) {
      this.startTimeout(0);
    }
  }

  /**
   * Start progress bar
   * @param startTime {number}
   * @default 0
   */
  startTimeout (startTime: number = 0) {
    const start = performance.now();
    const calculate = () => {
      const frame = requestAnimationFrame((timestamp) => {
        const runtime = timestamp + startTime - start;
        const progress = Math.min(runtime / this.toast.config.timeout, 1);
        if (this.state.paused) {
          cancelAnimationFrame(frame);
        } else if (runtime < this.toast.config.timeout) {
          this.state.progress = progress;
          calculate();
        } else {
          this.state.progress = 1;
          cancelAnimationFrame(frame);
        }
      })
    };
    calculate();
  }

}
