import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyOptions} from './interfaces/SnotifyOptions.interface';
import {SnotifyInfo} from './interfaces/SnotifyInfo.interface';
import {SnotifyAction} from './enum/SnotifyAction.enum';
import {SnotifyNotifications} from './interfaces/SnotifyNotifications.interface';
import {SnotifyPosition} from './enum/SnotifyPosition.enum';


@Component({
  selector: 'ng-snotify',
  templateUrl: './snotify.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SnotifyComponent implements OnInit, OnDestroy {
  /**
   * Toasts array
   */
  notifications: SnotifyNotifications;
  /**
   * Toasts emitter
   */
  emitter: Subscription;
  /**
   * Listens for options has been changed
   */
  optionsSubscription: Subscription;
  /**
   * Listens for lifecycle has been triggered
   */
  lifecycleSubscription: Subscription;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSize_a: number;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSize_b: number | undefined;
  /**
   * Helper for slice pipe (maxAtPosition)
   */
  blockSize_a: number;
  /**
   * Helper for slice pipe (maxAtPosition)
   */
  blockSize_b: number | undefined;
  /**
   * Backdrop Opacity
   */
  backdrop: number;


  constructor(private service: SnotifyService) { }

  /**
   * Init base options. Subscribe to options, lifecycle change
   */
  ngOnInit() {
    this.setOptions(this.service.options);
    this.optionsSubscription = this.service.optionsChanged.subscribe((options: SnotifyOptions) => {
      this.setOptions(options);
    });

    this.emitter = this.service.emitter.subscribe(
      (toasts: SnotifyToast[]) => {
        this.notifications = this.splitToasts(toasts.slice(this.dockSize_a, this.dockSize_b));
        const list = toasts.filter(toast => toast.config.backdrop >= 0);

        if (list.length) {
          this.backdrop = 0;
          setTimeout(() => {
            this.backdrop = list[list.length - 1].config.backdrop;
          }, 10)
        } else {
          this.backdrop = 0;
          setTimeout(() => {
            this.backdrop = -1;
          }, 400)
        }
      }
    );
    this.lifecycleSubscription = this.service.lifecycle.subscribe(
      (info: SnotifyInfo) => {
        switch (info.action) {
          case SnotifyAction.onInit:
            if (this.service.onInit) {
              this.service.onInit(info.toast);
            }
            break;
          case SnotifyAction.onClick:
            if (this.service.onClick) {
              this.service.onClick(info.toast);
            }
            break;
          case SnotifyAction.onHoverEnter:
            if (this.service.onHoverEnter) {
              this.service.onHoverEnter(info.toast);
            }
            break;
          case SnotifyAction.onHoverLeave:
            if (this.service.onHoverLeave) {
              this.service.onHoverLeave(info.toast);
            }
            break;
          case SnotifyAction.beforeDestroy:
            if (this.service.beforeDestroy) {
              this.service.beforeDestroy(info.toast);
            }
            break;
          case SnotifyAction.afterDestroy:
            if (this.service.afterDestroy) {
              this.service.afterDestroy(info.toast);
            }
            break;
          case SnotifyAction.onInput:
            if (this.service.onInput) {
              this.service.onInput(info.toast, info.value);
            }
            break;
        }
      }
    );

  }

  /**
   * Split toasts toasts into different objects
   * @param {SnotifyToast[]} toasts
   * @returns {SnotifyNotifications}
   */
  splitToasts(toasts: SnotifyToast[]): SnotifyNotifications {
    const result: SnotifyNotifications = {};

    for (const property in SnotifyPosition) {
      if (SnotifyPosition.hasOwnProperty(property)) {
        result[SnotifyPosition[property]] = [];
      }
    }

    toasts.forEach((toast: SnotifyToast) => {
      result[toast.config.position as string].push(toast);
    });

    return result;
  }

  /**
   * Setup global options object
   * @param options {SnotifyOptions}
   */
  setOptions(options: SnotifyOptions): void {
    if (this.service.options.newOnTop) {
      this.dockSize_a = -options.maxOnScreen;
      this.dockSize_b = undefined;
      this.blockSize_a = -options.maxAtPosition;
      this.blockSize_b = undefined;
    } else {
      this.dockSize_a = 0;
      this.dockSize_b = options.maxOnScreen;
      this.blockSize_a = 0;
      this.blockSize_b = options.maxAtPosition;
    }
  }

  /**
   * Unsubscribe subscriptions
   */
  ngOnDestroy() {
    this.emitter.unsubscribe();
    this.optionsSubscription.unsubscribe();
    this.lifecycleSubscription.unsubscribe();
  }

}
