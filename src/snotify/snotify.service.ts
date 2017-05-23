import {Injectable} from '@angular/core';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {PromiseObservable} from 'rxjs/observable/PromiseObservable';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyInfo} from './interfaces/SnotifyInfo.interface';
import {SnotifyOptions} from './interfaces/SnotifyOptions.interface';
import {SnotifyConfig} from './interfaces/SnotifyConfig.interface';
import {Snotify} from './interfaces/Snotify.interface';
import {SnotifyType} from './enum/SnotifyType.enum';
import {SnotifyPosition} from './enum/SnotifyPosition.enum';

/**
 * SnotifyService - create, remove, config toasts
 */
@Injectable()
export class SnotifyService {
  readonly emitter = new Subject<SnotifyToast[]>();
  readonly lifecycle = new Subject<SnotifyInfo>();
  readonly optionsChanged = new Subject<SnotifyOptions>();
  readonly toastChanged = new Subject<SnotifyToast>();
  readonly toastDeleted = new Subject<number>();
  private config: SnotifyConfig;
  private _options: SnotifyOptions;
  private notifications: SnotifyToast[] = [];

  // Callbacks
  onInit: (info?: SnotifyToast) => void;
  onClick: (info?: SnotifyToast) => void;
  onHoverEnter: (info?: SnotifyToast) => void;
  onHoverLeave: (info?: SnotifyToast) => void;
  beforeDestroy: (info?: SnotifyToast) => void;
  afterDestroy: (info?: SnotifyToast) => void;

  /**
   * Generates random id
   * @return {number}
   */
  static generateRandomId(): number {
    return Math.floor(Math.random() * (Date.now() - 1)) + 1;
  }

  /**
   * Simple is object check.
   * @param item {Object<any>}
   * @returns {boolean}
   */
  static isObject(item): boolean {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
  }

  /**
   * Deep merge objects.
   * @param sources {Array<Object>}
   * @returns {Object<any>}
   */
  static mergeDeep(...sources) {
    const target = {};
    if (!sources.length) {
      return target;
    }

    while (sources.length > 0) {
      const source = sources.shift();
      if (SnotifyService.isObject(source)) {
        for (const key in source) {
          if (SnotifyService.isObject(source[key])) {
            target[key] = SnotifyService.mergeDeep(target[key], source[key]);
          } else if (Array.isArray(source[key])) {
            if (!target[key]) {
              Object.assign(target, { [key]: source[key] });
            } else {
              target[key].forEach((value, i) => {
                target[key][i] = SnotifyService.mergeDeep(value, source[key][i]);
              });
            }
          } else {
            Object.assign(target, { [key]: source[key] });
          }
        }
      }
    }

    return target;
  }

  /**
   * Constructor - initialize base configuration objects
   */
  constructor() {
    this.config = {
      showProgressBar: true,
      timeout: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ]
    };
    this._options = {
      newOnTop: true,
      position: SnotifyPosition.right_bottom,
      maxOnScreen: 8,
      transition: 400
    };
  }

  /**
   * emit changes in notifications array
   */
  private emit(): void {
    this.emitter.next(this.getAll());
  }

  /**
   * Set global config
   * @param config {SnotifyConfig}
   * @param options {SnotifyOptions}
   */
  setConfig(config: SnotifyConfig, options?: SnotifyOptions): void {
    this.config = Object.assign(this.config, config);
    this._options = Object.assign(this._options, options);
    this.optionsChanged.next(this._options);
  }

  /**
   * get SnotifyOptions
   * @return {SnotifyOptions}
   */
  get options(){
    return this._options;
  }

  /**
   * returns SnotifyToast object
   * @param id {Number}
   * @return {undefined|SnotifyToast}
   */
  get(id: number): SnotifyToast {
    return this.notifications.find(toast => toast.id === id);
  }

  /**
   * returns copy of notifications array
   * @return {SnotifyToast[]}
   */
  private getAll(): SnotifyToast[] {
    return this.notifications.slice();
  }

  /**
   * add SnotifyToast to notifications array
   * @param toast {SnotifyToast}
   */
  private add(toast: SnotifyToast): void {
    if (this._options.newOnTop) {
      this.notifications.unshift(toast);
    } else {
      this.notifications.push(toast);
    }
    this.emit();
  }

  /**
   * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
   * @param id {Number}
   * @param remove {Boolean}
   */
  remove(id?: number, remove?: boolean): void {
    if (!id) {
      return this.clear();
    } else if (remove) {
      this.notifications = this.notifications.filter(toast => toast.id !== id);
      return this.emit();
    }
    this.toastDeleted.next(id);
  }

  /**
   * Clear notifications array
   */
  clear(): void {
    this.notifications = [];
    this.emit();
  }

  /**
   * Creates toast and add it to array, returns toast id
   * @param snotify {Snotify}
   * @return {number}
   */
  private create(snotify: Snotify): number {
    const id = SnotifyService.generateRandomId();
    this.add(new SnotifyToast(id, snotify.title, snotify.body, snotify.config || null));
    return id;
  }

  /**
   * Create toast with Success style, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  success(title: string, body: string, config?: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: Object.assign({}, this.config, config, {type: SnotifyType.SUCCESS})
    });
  }

  /**
   * Create toast with Error style, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  error(title: string, body: string, config?: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: Object.assign({}, this.config, config, {type: SnotifyType.ERROR})
    });
  }

  /**
   * Create toast with Info style, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  info(title: string, body: string, config?: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: Object.assign({}, this.config, config, {type: SnotifyType.INFO})
    });
  }

  /**
   * Create toast with Warining style, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  warning(title: string, body: string, config?: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: Object.assign({}, this.config, config, {type: SnotifyType.WARNING})
    });
  }

  /**
   * Create toast without style, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  simple(title: string, body: string, config?: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: Object.assign({}, this.config, config)
    });
  }

  /**
   * Create toast with Confirm style {with two buttons}, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  confirm(title: string, body: string, config: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: SnotifyService.mergeDeep(this.config, config, {type: SnotifyType.CONFIRM}, {closeOnClick: false})
    });
  }

  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param title {String}
   * @param body {String}
   * @param config {SnotifyConfig}
   * @return {number}
   */
  prompt(title: string, body: string, config: SnotifyConfig): number {
    return this.create({
      title: title,
      body: body,
      config: SnotifyService.mergeDeep(this.config, config, {type: SnotifyType.PROMPT}, {timeout: 0, closeOnClick: false})
    });
  }

  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param title {String}
   * @param body {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @return {number}
   */
  async(title: string, body: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>): number {
    let async: Observable<any>;
    if (action instanceof Promise) {
      async = PromiseObservable.create(action);
    } else {
      async = action;
    }

    const id = this.simple(title, body, {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: SnotifyType.ASYNC
    });

    const toast = this.get(id);
    let latestToast = Object.assign({}, toast);

    const updateToast = (type: SnotifyType, data?: SnotifyConfig) => {
      if (!data) {
        latestToast = SnotifyService.mergeDeep(toast, latestToast, {config: {type: type}}) as SnotifyToast;
      } else {
        latestToast = SnotifyService.mergeDeep(toast, data, {config: {type: type}}) as SnotifyToast;
      }

      this.toastChanged.next(latestToast);
    };

    const subscription: Subscription = async.subscribe(
      (next?: SnotifyConfig) => {
        updateToast(SnotifyType.ASYNC, next);
      },
      (error?: SnotifyConfig) => {
        updateToast(SnotifyType.ERROR, error);
        subscription.unsubscribe();
      },
      () => {
        updateToast(SnotifyType.SUCCESS);
        subscription.unsubscribe();
      }
    );

    return id;
  }

}
