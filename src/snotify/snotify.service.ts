import {Injectable} from '@angular/core';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subject} from 'rxjs/Subject';
import {SnotifyConfig, SnotifyOptions, SnotifyPosition, SnotifyType} from './snotify-config';
import {Snotify} from './snotify';


@Injectable()
export class SnotifyService {
  emitter = new Subject<SnotifyToast[]>();
  transitionDelay = 400;
  config: SnotifyConfig;
  options: SnotifyOptions;
  notifications: SnotifyToast[] = [];

  constructor() {
    this.config = {
      showProgressBar: true,
      timeout: 1500,
      closeOnClick: true
    };
    this.options = {
      newOnTop: true,
      position: [SnotifyPosition.BOTTOM, SnotifyPosition.RIGHT],
      positionOffset: {
        horizontal: '10px',
        vertical: '10px'
      },
      maxOnScreen: 8
    };
  }

  private emmit(): void {
    this.emitter.next(this.getAll());
  }

  setConfig(config: SnotifyConfig, options?: SnotifyOptions): void {
    this.config = Object.assign(this.config, config);
    this.options = Object.assign(this.options, options);
  }

  getConfig(id: number): SnotifyConfig {
    const config = this.get(id).config;
    if (config) {
      return Object.assign({}, this.config, config);
    } else {
      return Object.assign({}, this.config);
    }
  }

  get(id: number): SnotifyToast {
    return this.notifications.find(toast => toast.id === id);
  }

  getAll(): SnotifyToast[] {
    return this.notifications.slice();
  }

  add(toast: SnotifyToast): void {
    if (this.options.newOnTop) {
      this.notifications.unshift(toast);
    } else {
      this.notifications.push(toast);
    }
    this.emmit();
  }

  remove(id: number | Date | string, callback: () => void): void {
    callback();
    setTimeout(() => {
      this.notifications = this.notifications.filter(toast => toast.id !== id);
      this.emmit();
    }, this.transitionDelay);
  }

  timeout(id: number | Date | string, timeout: number, callback: () => void) {
    setTimeout(() => {
      this.remove(id, callback);
    }, timeout);
  }

  clear() {
    this.notifications = [];
    this.emmit();
  }

  create(snotify: Snotify) {
    this.add(
      new SnotifyToast(
        Math.floor(Math.random() * (Date.now() - 1)) + 1,
        snotify.title,
        snotify.body,
        snotify.config || null)
    );
    console.log(this.notifications);
  }

  success(title: string, body: string, config?: SnotifyConfig) {
    this.create({
      title: title,
      body: body,
      config: Object.assign({}, config, {type: SnotifyType.SUCCESS})
    });
  }

  error(title: string, body: string, config?: SnotifyConfig) {
    this.create({
      title: title,
      body: body,
      config: Object.assign({}, config, {type: SnotifyType.ERROR})
    });
  }

  info(title: string, body: string, config?: SnotifyConfig) {
    this.create({
      title: title,
      body: body,
      config: Object.assign({}, config, {type: SnotifyType.INFO})
    });
  }

  warning(title: string, body: string, config?: SnotifyConfig) {
    this.create({
      title: title,
      body: body,
      config: Object.assign({}, config, {type: SnotifyType.WARNING})
    });
  }

  bare(title: string, body: string, config?: SnotifyConfig) {
    this.create({
      title: title,
      body: body,
      config: Object.assign({}, config, {type: SnotifyType.BARE})
    });
  }

}
