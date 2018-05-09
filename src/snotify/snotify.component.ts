import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs';
import {SnotifyNotifications} from './interfaces/SnotifyNotifications.interface';
import {SnotifyPosition} from './enums/SnotifyPosition.enum';
import {SnotifyEvent} from './types/event.type';



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
  backdrop = -1;
  /**
   * How many toasts with backdrop in current queue
   */
  withBackdrop: SnotifyToast[];

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
          this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0);
        } else {
          this.dockSize_a = 0;
          this.dockSize_b = this.service.config.global.maxOnScreen;
          this.blockSize_a = 0;
          this.blockSize_b = this.service.config.global.maxAtPosition;
          this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0).reverse();
        }
        this.notifications = this.splitToasts(toasts.slice(this.dockSize_a, this.dockSize_b));

      }
    );

  }

  // TODO: fix backdrop if more than one toast called in a row
  /**
   * Changes the backdrop opacity
   * @param {SnotifyEvent} event
   */
  stateChanged(event: SnotifyEvent) {
    if (!this.withBackdrop.length && this.backdrop > 0) {
      this.backdrop = 0;
    } else if (!this.withBackdrop.length) {
      this.backdrop = -1;
      return;
    }
    switch (event) {
      case 'mounted':
        if (this.backdrop < 0) {
          this.backdrop = 0;
        }
        break;
      case 'beforeShow':
        this.backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
        break;
      case 'beforeHide':
        if (this.withBackdrop.length === 0) {
          this.backdrop = 0;
        }
        break;
      case 'hidden':
        if (this.withBackdrop.length === 0) {
          this.backdrop = -1;
        }
        break;
    }

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
  }

}
