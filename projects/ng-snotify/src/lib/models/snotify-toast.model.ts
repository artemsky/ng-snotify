import { SnotifyToastConfig } from '../interfaces/snotify-toast-config.interface';
import { Subject, Subscription } from 'rxjs';
import { SnotifyEventType } from '../types/snotify-event.type';
import { SnotifyStyle } from '../enums/snotify-style.enum';
// @TODO remove method in observable way
/**
 * Toast main model
 */
export class SnotifyToast {
  /**
   * Emits SnotifyEventType
   */
  readonly eventEmitter = new Subject<SnotifyEventType>();
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
   * @param event SnotifyEventType
   * @param action (toast: this) => void
   */
  on(event: SnotifyEventType, action: (toast: this) => void): this {
    this.eventsHolder.push(
      this.eventEmitter.subscribe((e: SnotifyEventType) => {
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
