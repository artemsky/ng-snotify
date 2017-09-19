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
import {SnotifyPosition} from './enum/SnotifyPosition.enum';
import {SnotifyAction} from './enum/SnotifyAction.enum';
import {SnotifyType} from './enum/SnotifyType.enum';
import {SafeHtml} from '@angular/platform-browser';
import {TransformArgument} from './transform-argument.decorator';
import {mergeDeep, uuid} from './utils';
import {SetDefaultConfig} from './set-default-config.decorator';

/**
 * SnotifyService - create, remove, config toasts
 */
@Injectable()
// tslint:disable:unified-signatures
export class SnotifyService {
  readonly emitter = new Subject<SnotifyToast[]>();
  readonly lifecycle = new Subject<SnotifyInfo>();
  readonly optionsChanged = new Subject<SnotifyOptions>();
  readonly toastChanged = new Subject<SnotifyToast>();
  readonly toastDeleted = new Subject<number>();
  private config: SnotifyConfig;
  private _options: SnotifyOptions;
  private notifications: SnotifyToast[] = [];
  private _defaultAnimationTime = 400;

  // Callbacks
  onInit: (info?: SnotifyToast) => void;
  onClick: (info?: SnotifyToast) => void;
  onHoverEnter: (info?: SnotifyToast) => void;
  onHoverLeave: (info?: SnotifyToast) => void;
  onInput: (info?: SnotifyToast, value?: string) => void;
  beforeDestroy: (info?: SnotifyToast) => void;
  afterDestroy: (info?: SnotifyToast) => void;

  /**
   * Constructor - initialize base configuration objects
   */
  constructor() {
    this.config = {
      showProgressBar: true,
      timeout: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      bodyMaxLength: 150,
      titleMaxLength: 16,
      backdrop: -1,
      animation: {enter: 'fadeInUp', exit: 'fadeOutRight', time: this._defaultAnimationTime}
    };
    this._options = {
      newOnTop: true,
      position: SnotifyPosition.right_bottom,
      maxOnScreen: 8,
      maxAtPosition: 8,
      maxHeight: 300
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
    this._options = mergeDeep(this._options, options);
    this.config = mergeDeep(this.config,
      {
        animation: ((position) => {
          switch (position) {
            case SnotifyPosition.left_top:
              return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this._defaultAnimationTime};
            case SnotifyPosition.left_center:
              return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this._defaultAnimationTime};
            case SnotifyPosition.left_bottom:
              return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this._defaultAnimationTime};

            case SnotifyPosition.right_top:
              return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this._defaultAnimationTime};
            case SnotifyPosition.right_center:
              return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this._defaultAnimationTime};
            case SnotifyPosition.right_bottom:
              return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this._defaultAnimationTime};

            case SnotifyPosition.center_top:
              return {enter: 'fadeInDown', exit: 'fadeOutUp', time: this._defaultAnimationTime};
            case SnotifyPosition.center_center:
              return {enter: 'fadeIn', exit: 'fadeOut', time: this._defaultAnimationTime};
            case SnotifyPosition.center_bottom:
              return {enter: 'fadeInUp', exit: 'fadeOutDown', time: this._defaultAnimationTime};
          }
        })(this._options.position)
      },
      config);

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
    toast.config.position = toast.config.position || this.options.position;
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
    const id = uuid();
    this.add(new SnotifyToast(id, snotify.title, snotify.body, snotify.config));
    return id;
  }

  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  simple(body: string): number
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  simple(body: string, title: string): number
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  simple(body: string, config: SnotifyConfig): number
  /**
   * Create toast with simple style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  simple(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  simple(args: any): number {
    return this.create(args);
  }

  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  success(body: string): number
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  success(body: string, title: string): number
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  success(body: string, config: SnotifyConfig): number
  /**
   * Create toast with success style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  success(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  success(args: any): number {
    return this.create(args);
  }

  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  error(body: string): number
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  error(body: string, title: string): number
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  error(body: string, config: SnotifyConfig): number
  /**
   * Create toast with error style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  error(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  error(args: any): number {
    return this.create(args);
  }

  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  info(body: string): number
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  info(body: string, title: string): number
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  info(body: string, config: SnotifyConfig): number
  /**
   * Create toast with info style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  info(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  info(args: any): number {
    return this.create(args);
  }

  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  warning(body: string): number
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  warning(body: string, title: string): number
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  warning(body: string, config: SnotifyConfig): number
  /**
   * Create toast with warning style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  warning(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  warning(args: any): number {
    return this.create(args);
  }

  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  confirm(body: string): number
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  confirm(body: string, title: string): number
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  confirm(body: string, config: SnotifyConfig): number
  /**
   * Create toast with confirm style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  confirm(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  confirm(args: any): number {
    return this.create(args);
  }

  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @returns {number}
   */
  prompt(body: string): number
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  prompt(body: string, title: string): number
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  prompt(body: string, config: SnotifyConfig): number
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  prompt(body: string, title: string, config: SnotifyConfig): number
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetDefaultConfig
  prompt(args: any): number {
    return this.create(args);
  }

  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @return {number}
   */
  async(body: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>): number
  async(body: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>, config: SnotifyConfig): number
  async(body: string, title: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>): number
  async(body: string, title: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>, config: SnotifyConfig): number
  @TransformArgument
  async(args: any): number {
    return 1;
    // if (typeof args.action === SnotifyConfig)
    // let async: Observable<any>;
    // if (action instanceof Promise) {
    //   async = PromiseObservable.create(action);
    // } else {
    //   async = action;
    // }
    //
    // const id = this.simple(body, title, {
    //   pauseOnHover: false,
    //   closeOnClick: false,
    //   timeout: 0,
    //   showProgressBar: false,
    //   type: SnotifyType.ASYNC
    // });
    //
    // const toast = this.get(id);
    // let latestToast = Object.assign({}, toast);
    //
    // const updateToast = (type: SnotifyType, data?: SnotifyConfig) => {
    //   if (!data) {
    //     latestToast = mergeDeep(toast, latestToast, {config: {type: type}}) as SnotifyToast;
    //   } else {
    //     latestToast = mergeDeep(toast, data, {config: {type: type}}) as SnotifyToast;
    //   }
    //
    //   this.toastChanged.next(latestToast);
    // };
    //
    // const lifecycleSubscription = this.lifecycle.subscribe(
    //   (info: SnotifyInfo) => {
    //     if (info.action === SnotifyAction.onInit && info.toast.id === id) {
    //       const subscription: Subscription = async.subscribe(
    //         (next?: SnotifyConfig) => {
    //           updateToast(SnotifyType.ASYNC, next);
    //         },
    //         (error?: SnotifyConfig) => {
    //           updateToast(SnotifyType.ERROR, error);
    //           subscription.unsubscribe();
    //         },
    //         () => {
    //           updateToast(SnotifyType.SUCCESS);
    //           subscription.unsubscribe();
    //           lifecycleSubscription.unsubscribe();
    //         }
    //       );
    //     }
    //   }
    // );
    //
    // return id;
  }

  /**
   * Creates empty toast with html string inside
   * @param {string | SafeHtml} html
   * @param {SnotifyConfig} config
   * @returns {number}
   */
  html(html: string | SafeHtml, config?: SnotifyConfig): number {
    return this.create({
      title: null,
      body: null,
      config: mergeDeep(this.config, {type: SnotifyType.simple, html}, config),
    });
  }
}
