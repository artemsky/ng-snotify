import { SnotifyToastConfig } from '../interfaces/snotify-toast-config.interface';
import { Subject, Subscription } from 'rxjs';
import { SnotifyEvent } from '../types/event.type';
import { SnotifyStyle } from '../enums/snotify-style.enum';
// @TODO remove method in observable way
/**
 * Toast main model
 */
export class SnotifyToast {
  /**
   * Emits SnotifyEvent
   */
  readonly eventEmitter = new Subject<SnotifyEvent>();
  /**
   * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
   */
  private eventsHolder: Subscription[] = [];
  /**
   * Toast prompt value
   */
  value: string;
  /**
   * Toast validator
   */
  valid: boolean;
  constructor(public id: number, public title: string, public body: string, public config: SnotifyToastConfig) {
    if (this.config.type === SnotifyStyle.prompt) {
      this.value = '';
    }
    this.on('hidden', () => {
      this.eventsHolder.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    });
  }

  /**
   * Subscribe to toast events
   * @returns this
   * @param event SnotifyEvent
   * @param action (toast: this) => void
   */
  on(event: SnotifyEvent, action: (toast: this) => void): this {
    this.eventsHolder.push(
      this.eventEmitter.subscribe((e: SnotifyEvent) => {
        if (e === event) {
          action(this);
        }
      })
    );
    return this;
  }

  /**
   * Tests if a toast equals this toast.
   * @returns boolean true then equals else false.
   * @param toast SnotifyToast
   */
  equals(toast: SnotifyToast): boolean {
    return this.body === toast.body && this.title === toast.title && this.config.type === toast.config.type;
  }
}
