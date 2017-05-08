import {ElementRef, Injectable} from '@angular/core';
import {Toast} from './toast/toast.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SnotifyService {
  emitter = new Subject<Toast[]>();
  transitionDelay = 500;
  notifications: Toast[] = [
    new Toast('title', 'body', 1000),
    new Toast('title', 'body', 10000),
    new Toast('title', 'body', 5000),
    new Toast('title', 'body', 0),
  ];
  constructor() { }

  private emmit() {
    this.emitter.next(this.getAll());
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

  clear() {
    this.notifications = [];
    this.emmit();
  }

}
