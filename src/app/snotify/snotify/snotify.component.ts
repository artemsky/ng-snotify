import {Component, OnDestroy, OnInit} from '@angular/core';
import {SnotifyService} from "./snotify.service";
import {Toast} from "./toast/toast.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-snotify',
  templateUrl: './snotify.component.html',
  styleUrls: ['./snotify.component.css']
})
export class SnotifyComponent implements OnInit, OnDestroy {
  notifications: Toast[];
  emitter: Subscription;
  constructor(private service: SnotifyService) { }

  ngOnInit() {
    this.notifications = this.service.getAll();
    this.emitter = this.service.emitter.subscribe(
      (toasts: Toast[]) => this.notifications = toasts
    );

  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

  onClick() {

  }

}
