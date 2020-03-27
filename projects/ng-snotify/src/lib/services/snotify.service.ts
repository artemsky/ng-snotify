import { Inject, Injectable } from '@angular/core';
import { Observable, Subject, Subscription, from } from 'rxjs';
import { SnotifyToastConfig } from '../interfaces/snotify-toast-config.interface';
import { Snotify } from '../interfaces/snotify.interface';
import { SnotifyTypeType } from '../types/snotify-type.type';
import { SafeHtml } from '@angular/platform-browser';
import { TransformArgument } from '../decorators/transform-argument.decorator';
import { mergeDeep, uuid } from '../utils';
import { SetToastType } from '../decorators/set-toast-type.decorator';
import { SnotifyDefaults } from '../interfaces/snotify-defaults.interface';
import { SnotifyToast } from '../models/snotify-toast.model';
import { SnotifyStyle } from '../enums/snotify-style.enum';

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

  constructor(@Inject('SnotifyToastConfig') public config: SnotifyDefaults) {}
  /**
   * emit changes in notifications array
   */
  private emit(): void {
    this.emitter.next(this.notifications.slice());
  }

  /**
   * returns SnotifyToast object
   * @param id Number
   * @return SnotifyToast|undefined
   */
  get(id: number): SnotifyToast {
    return this.notifications.find(toast => toast.id === id);
  }

  /**
   * add SnotifyToast to notifications array
   * @param toast SnotifyToast
   */
  private add(toast: SnotifyToast): void {
    if (this.config.global.filterDuplicates && this.containsToast(toast)) {
      return;
    }
    if (this.config.global.newOnTop) {
      this.notifications.unshift(toast);
    } else {
      this.notifications.push(toast);
    }
    this.emit();
  }

  /**
   * checks if the toast is in the collection.
   * @param inToast SnotifyToast
   * @returns boolean
   */
  private containsToast(inToast: SnotifyToast): boolean {
    return this.notifications.some(toast => toast.equals(inToast));
  }

  /**
   * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
   * @param id number
   * @param remove boolean
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
   * @param snotify Snotify
   * @return number
   */
  create(snotify: Snotify): SnotifyToast {
    const config = mergeDeep(this.config.toast, this.config.type[snotify.config.type], snotify.config);
    const toast = new SnotifyToast(uuid(), snotify.title, snotify.body, config);
    this.add(toast);
    return toast;
  }

  setDefaults(defaults: SnotifyDefaults): SnotifyDefaults {
    return (this.config = mergeDeep(this.config, defaults) as SnotifyDefaults);
  }

  /**
   * Create toast with simple style returns toast id;
   * @param body string
   * @returns number
   */
  simple(body: string): SnotifyToast;
  /**
   * Create toast with simple style returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  simple(body: string, title: string): SnotifyToast;
  /**
   * Create toast with simple style returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  simple(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with simple style  returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  simple(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * @param body string
   * @returns number
   */
  success(body: string): SnotifyToast;
  /**
   * Create toast with success style returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  success(body: string, title: string): SnotifyToast;
  /**
   * Create toast with success style returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  success(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with success style  returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  success(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * @param body string
   * @returns number
   */
  error(body: string): SnotifyToast;
  /**
   * Create toast with error style returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  error(body: string, title: string): SnotifyToast;
  /**
   * Create toast with error style returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  error(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with error style  returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  error(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * @param body string
   * @returns number
   */
  info(body: string): SnotifyToast;
  /**
   * Create toast with info style returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  info(body: string, title: string): SnotifyToast;
  /**
   * Create toast with info style returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  info(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with info style  returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  info(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * @param body string
   * @returns number
   */
  warning(body: string): SnotifyToast;
  /**
   * Create toast with warning style returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  warning(body: string, title: string): SnotifyToast;
  /**
   * Create toast with warning style returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  warning(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with warning style  returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  warning(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * @param body string
   * @returns number
   */
  confirm(body: string): SnotifyToast;
  /**
   * Create toast with confirm style returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  confirm(body: string, title: string): SnotifyToast;
  /**
   * Create toast with confirm style returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  confirm(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with confirm style  returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  confirm(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * Create toast with Prompt style with two buttons, returns toast id;
   * @param body string
   * @returns number
   */
  prompt(body: string): SnotifyToast;
  /**
   * Create toast with Prompt style with two buttons, returns toast id;
   * @param body string
   * @param title string
   * @returns number
   */
  prompt(body: string, title: string): SnotifyToast;
  /**
   * Create toast with Prompt style with two buttons, returns toast id;
   * @param body string
   * @param config SnotifyToastConfig
   * @returns number
   */
  prompt(body: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Create toast with Prompt style with two buttons, returns toast id;
   * @param [body] string
   * @param [title] string
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  prompt(body: string, title: string, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
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
   * @param body string
   * @param action Promise<Snotify> | Observable<Snotify>
   * @returns number
   */
  async(body: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body string
   * @param title string
   * @param action Promise<Snotify> | Observable<Snotify>
   * @returns number
   */
  async(body: string, title: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body string
   * @param action Promise<Snotify> | Observable<Snotify>
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  async(body: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyToastConfig): SnotifyToast;
  /**
   * Creates async toast with Info style. Pass action, and resolve or reject it.
   * @param body string
   * @param title string
   * @param action Promise<Snotify> | Observable<Snotify>
   * @param [config] SnotifyToastConfig
   * @returns number
   */
  async(
    body: string,
    title: string,
    action: Promise<Snotify> | Observable<Snotify>,
    config: SnotifyToastConfig
  ): SnotifyToast;
  /**
   * Transform toast arguments into Snotify object
   */
  @TransformArgument
  /**
   * Determines current toast type and collects default configuration
   */
  @SetToastType
  async(args: any): SnotifyToast {
    let async: Observable<any>;
    if (args.action instanceof Promise) {
      async = from(args.action);
    } else {
      async = args.action;
    }

    const toast = this.create(args);

    toast.on('mounted', () => {
      const subscription: Subscription = async.subscribe(
        (next?: Snotify) => {
          this.mergeToast(toast, next);
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
    });

    return toast;
  }

  private mergeToast(toast, next, type?: SnotifyTypeType) {
    if (next.body) {
      toast.body = next.body;
    }
    if (next.title) {
      toast.title = next.title;
    }
    if (type) {
      toast.config = mergeDeep(toast.config, this.config.global, this.config.toast[type], { type }, next.config);
    } else {
      toast.config = mergeDeep(toast.config, next.config);
    }
    if (next.html) {
      toast.config.html = next.html;
    }
    this.emit();
    this.toastChanged.next(toast);
  }

  /**
   * Creates empty toast with html string inside
   * @param html string | SafeHtml
   * @param config SnotifyToastConfig
   * @returns number
   */
  html(html: string | SafeHtml, config?: SnotifyToastConfig): SnotifyToast {
    return this.create({
      title: null,
      body: null,
      config: {
        ...config,
        ...{ html }
      }
    });
  }
}
