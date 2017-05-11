import {Injectable} from '@angular/core';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subject} from 'rxjs/Subject';
import {SnotifyConfig, SnotifyOptions, SnotifyPosition, SnotifyType} from './snotify-config';
import {Snotify} from './snotify';


@Injectable()
export class SnotifyService {
  readonly emitter = new Subject<SnotifyToast[]>();
  readonly optionsChanged = new Subject<SnotifyOptions>();
  readonly transitionDelay = 400;
  private config: SnotifyConfig;
  options: SnotifyOptions;
  private notifications: SnotifyToast[] = [];

  constructor() {
    this.config = {
      showProgressBar: true,
      timeout: 1500,
      closeOnClick: true,
      pauseOnHover: true
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
    this.optionsChanged.next(this.options);
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

  remove(id: number, callback: () => void): void {
    callback();
    setTimeout(() => {
      this.notifications = this.notifications.filter(toast => toast.id !== id);
      this.emmit();
    }, this.transitionDelay);
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
