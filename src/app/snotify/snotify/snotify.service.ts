import {ElementRef, Injectable} from '@angular/core';
import {Toast} from './toast/toast.model';
import {Subject} from 'rxjs/Subject';
import {Snotify} from './snotify';

@Injectable()
export class SnotifyService {
  emitter = new Subject<Toast[]>();
  transitionDelay = 400;
  options: Snotify;
  notifications: Toast[] = [
    new Toast('Title', 'body', 1000),
    new Toast('Title omg nig', 'body', 100000),
    new Toast('title', 'content length is too big withou lore m lorem lorem', 20000),
    new Toast('title', 'body', 0),
  ];
  constructor() {
    this.options = {
      showProgressBar: true
    };
  }

  private emmit(): void {
    this.emitter.next(this.getAll());
  }

  setConfig(options: Snotify): void {
    this.options = Object.assign(this.options, options);
  }

  getConfig(): Snotify {
    return Object.assign({}, this.options);
  }

  get(id: number): Toast {
    return this.notifications.find(toast => toast.id === id);
  }

  getAll(): Toast[] {
    return this.notifications.slice();
  }

  add(toast: Toast): void {
    this.notifications.push(toast);
    this.emmit();
  }

  remove(id: number, callback: () => void): void {
    callback();
    setTimeout(() => {
      this.notifications = this.notifications.filter(toast => toast.id !== id);
      this.emmit();
    }, this.transitionDelay);
  }

  timeout(id: number, timeout: number, callback: () => void) {
    setTimeout(() => {
      this.remove(id, callback);
    }, timeout);
  }

  clear() {
    this.notifications = [];
    this.emmit();
  }

}
