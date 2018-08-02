import {SnotifyToastConfig} from '../interfaces/SnotifyToastConfig.interface';
import {Subject, Subscription} from 'rxjs';
import {SnotifyEvent} from '../types/event.type';
import {SnotifyStyle} from '../enums/SnotifyStyle.enum';
// @TODO remove method in observable way
/**
 * Toast main model
 */
export class SnotifyToast {
  /**
   * Emits {SnotifyEvent}
   * @type {Subject<SnotifyEvent>}
   */
  readonly eventEmitter = new Subject<SnotifyEvent>();
  /**
   * Holds all subscribers because we need to unsubscribe from all before toast get destroyed
   * @type {Subscription[]}
   * @private
   */
  private _eventsHolder: Subscription[] = [];
  /**
   * Toast prompt value
   */
  value: string;
  /**
   * Toast validator
   */
  valid: boolean;
  constructor (public id: number,
               public title: string,
               public body: string,
               public config: SnotifyToastConfig) {
    if (this.config.type === SnotifyStyle.prompt) {
      this.value = '';
    }
    this.on('hidden', () => {
      this._eventsHolder.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      })
    })
  }

  /**
   * Subscribe to toast events
   * @param {SnotifyEvent} event
   * @param {(toast: SnotifyToast) => void} action
   * @returns {this}
   */
  on (event: SnotifyEvent, action: (toast: this) => void): this {
    this._eventsHolder.push(
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
   * @param {SnotifyToast} toast
   * @returns {boolean} true then equals else false.
   */
  equals(toast: SnotifyToast): boolean {
    return this.body === toast.body &&
           this.title === toast.title &&
           this.config.type === toast.config.type
  }

}
