import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyInfo} from './interfaces/SnotifyInfo.interface';
import {SnotifyAction} from './enums/SnotifyAction.enum';
import {SnotifyNotifications} from './interfaces/SnotifyNotifications.interface';
import {SnotifyPosition} from './enums/SnotifyPosition.enum';



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

  constructor(private service: SnotifyService) {}

  /**
   * Init base options. Subscribe to options, lifecycle change
   */
  ngOnInit() {
    this.emitter = this.service.emitter.subscribe(
      (toasts: SnotifyToast[]) => {

        if (this.service.config.global.newOnTop) {
          this.dockSize_a = -this.service.config.global.maxOnScreen;
          this.dockSize_b = undefined;
          this.blockSize_a = -this.service.config.global.maxAtPosition;
          this.blockSize_b = undefined;
        } else {
          this.dockSize_a = 0;
          this.dockSize_b = this.service.config.global.maxOnScreen;
          this.blockSize_a = 0;
          this.blockSize_b = this.service.config.global.maxAtPosition;
        }

        this.notifications = this.splitToasts(toasts.slice(this.dockSize_a, this.dockSize_b));
        const list = toasts.filter(toast => toast.config.backdrop >= 0);

        if (list.length) {
          this.backdrop = 0;
          setTimeout(() => {
            this.backdrop = list[list.length - 1].config.backdrop;
          }, 10)
        } else {
          if (this.backdrop > 0) {
            this.backdrop = 0;
          }
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
   * Unsubscribe subscriptions
   */
  ngOnDestroy() {
    this.emitter.unsubscribe();
    this.lifecycleSubscription.unsubscribe();
  }

}
