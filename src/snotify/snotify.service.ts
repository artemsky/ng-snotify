import {Inject, Injectable} from '@angular/core';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {PromiseObservable} from 'rxjs/observable/PromiseObservable';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyConfig} from './interfaces/SnotifyToastConfig.interface';
import {Snotify} from './interfaces/Snotify.interface';
import {SnotifyStyle} from './enums/SnotifyStyle.enum';
import {SnotifyType} from './types/snotify.type'
import {SafeHtml} from '@angular/platform-browser';
import {TransformArgument} from './decorators/transform-argument.decorator';
import {mergeDeep, uuid} from './utils';
import {SetToastType} from './decorators/set-toast-type.decorator';
import {SnotifyDefaults} from './interfaces/SnotifyDefaults.interface';

/**
 * SnotifyService - create, remove, config toasts
 */
@Injectable()
// tslint:disable:unified-signatures
export class SnotifyService {
  readonly emitter = new Subject<SnotifyToast[]>();
  readonly toastChanged = new Subject<SnotifyToast>();
  readonly toastDeleted = new Subject<number>();
  private notifications: SnotifyToast[] = [];

  constructor(@Inject('SnotifyConfig') public config: SnotifyDefaults) {
  }
  /**
   * emit changes in notifications array
   */
  private emit(): void {
    this.emitter.next(this.notifications.slice());
  }

  /**
   * returns SnotifyToast object
   * @param id {Number}
   * @return {SnotifyToast|undefined}
   */
  get(id: number): SnotifyToast {
    return this.notifications.find(toast => toast.id === id);
  }

  /**
   * add SnotifyToast to notifications array
   * @param toast {SnotifyToast}
   */
  private add(toast: SnotifyToast): void {
    if (toast.config.newOnTop) {
      this.notifications.unshift(toast);
    } else {
      this.notifications.push(toast);
    }
    this.emit();
  }

  /**
   * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
   * @param id {number}
   * @param remove {boolean}
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
  private create(snotify: Snotify): SnotifyToast {
    const config =
      mergeDeep(this.config.toast, this.config.type[snotify.config.type], snotify.config);
    const toast = new SnotifyToast(
      uuid(),
      snotify.title,
      snotify.body,
      config
    );
    this.add(toast);
    return toast;
  }

  setDefaults(defaults: SnotifyDefaults) {
    this.config = mergeDeep(this.config, defaults) as SnotifyDefaults;
  }

  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  simple(body: string): SnotifyToast
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  simple(body: string, title: string): SnotifyToast
  /**
   * Create toast with simple style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  simple(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with simple style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  simple(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  simple(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  success(body: string): SnotifyToast
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  success(body: string, title: string): SnotifyToast
  /**
   * Create toast with success style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  success(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with success style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  success(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  success(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  error(body: string): SnotifyToast
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  error(body: string, title: string): SnotifyToast
  /**
   * Create toast with error style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  error(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with error style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  error(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  error(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  info(body: string): SnotifyToast
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  info(body: string, title: string): SnotifyToast
  /**
   * Create toast with info style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  info(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with info style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  info(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  info(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  warning(body: string): SnotifyToast
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  warning(body: string, title: string): SnotifyToast
  /**
   * Create toast with warning style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  warning(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with warning style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  warning(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  warning(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @returns {number}
   */
  confirm(body: string): SnotifyToast
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  confirm(body: string, title: string): SnotifyToast
  /**
   * Create toast with confirm style returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  confirm(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with confirm style  returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  confirm(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  confirm(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @returns {number}
   */
  prompt(body: string): SnotifyToast
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param title {String}
   * @returns {number}
   */
  prompt(body: string, title: string): SnotifyToast
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param body {String}
   * @param config {SnotifyConfig}
   * @returns {number}
   */
  prompt(body: string, config: SnotifyConfig): SnotifyToast
  /**
   * Create toast with Prompt style {with two buttons}, returns toast id;
   * @param [body] {String}
   * @param [title] {String}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  prompt(body: string, title: string, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  prompt(args: any): SnotifyToast {
    return this.create(args);
  }

  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @returns {number}
   */
  async(body: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @returns {number}
   */
  async(body: string, title: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  async(body: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyConfig): SnotifyToast
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body {String}
   * @param title {String}
   * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
   * @param [config] {SnotifyConfig}
   * @returns {number}
   */
  async(body: string, title: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyConfig): SnotifyToast
  /**
   * Transform toast arguments into {Snotify} object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  async(args: any): SnotifyToast {
    let async: Observable<any>;
    if (args.action instanceof Promise) {
      async = PromiseObservable.create(args.action );
    } else {
      async = args.action;
    }

    const toast = this.create(args);

    toast.on('shown',
      (info: SnotifyToast) => {
          const subscription: Subscription = async.subscribe(
            (next?: Snotify) => {
              this.mergeToast(toast, next)
            },
            (error?: Snotify) => {
              this.mergeToast(toast, error, SnotifyStyle.error);
              subscription.unsubscribe();
            },
            () => {
              this.mergeToast(toast, {}, SnotifyStyle.success);
              subscription.unsubscribe();
            }
          );
      }
    );

    return toast;
  }

  private mergeToast(toast, next, type?: SnotifyType) {
    if (next.body) {
      toast.body = next.body;
    }
    if (next.title) {
      toast.title = next.title;
    }
    if (type) {
      toast.config = mergeDeep(toast.config, this.config.global, this.config.toast[type], {type}, next.config)
    } else {
      toast.config = mergeDeep(toast.config, next.config)
    }
    if (next.html) {
      toast.config.html = next.html;
    }
    this.toastChanged.next(toast);
  }

  /**
   * Creates empty toast with html string inside
   * @param {string | SafeHtml} html
   * @param {SnotifyConfig} config
   * @returns {number}
   */
  html(html: string | SafeHtml, config?: SnotifyConfig): SnotifyToast {
    return this.create({
      title: null,
      body: null,
      config: {
        ...config,
        ...{html}
      }
    });
  }
}
