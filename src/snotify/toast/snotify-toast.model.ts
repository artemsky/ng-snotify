import {SnotifyToastConfig} from '../interfaces/SnotifyToastConfig.interface';
import {Subject} from 'rxjs/Subject';
import {SnotifyEvent} from '../types/event.type';
import {SnotifyStyle} from '../enums/SnotifyStyle.enum';
import {Subscription} from 'rxjs/Subscription';
// @TODO remove method in observable way
/**
 * Toast main model
 */
export class SnotifyToast {
  readonly eventEmitter = new Subject<SnotifyEvent>();
  private _eventsHolder: Subscription[] = [];
  value: string;
  valid = true;
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

}
