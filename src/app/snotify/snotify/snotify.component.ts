import {Component, OnDestroy, OnInit} from '@angular/core';
import {SnotifyService} from "./snotify.service";
import {SnotifyToast} from "./toast/snotify-toast.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-snotify',
  templateUrl: './snotify.component.html',
  styleUrls: ['./snotify.component.css']
})
export class SnotifyComponent implements OnInit, OnDestroy {
  notifications: SnotifyToast[];
  emitter: Subscription;
  constructor(private service: SnotifyService) { }

  ngOnInit() {
    this.notifications = this.service.getAll();
    this.emitter = this.service.emitter.subscribe(
      (toasts: SnotifyToast[]) => this.notifications = toasts
    );

  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

  onClick() {

  }

}
