import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyPosition} from './snotify-config';

@Component({
  selector: 'ng-snotify',
  templateUrl: './snotify.component.html',
  styleUrls: ['./snotify.component.css']
})
export class SnotifyComponent implements OnInit, OnDestroy {
  notifications: SnotifyToast[];
  emitter: Subscription;
  dockSize_a: number;
  dockSize_b: number | undefined;
  constructor(private service: SnotifyService, private render: Renderer2, private snotify: ElementRef) { }

  ngOnInit() {
    this.notifications = this.service.getAll();
    if (this.service.options.newOnTop) {
      this.dockSize_a = -this.service.options.maxOnScreen;
      this.dockSize_b = undefined;
    } else {
      this.dockSize_a = 0;
      this.dockSize_b = this.service.options.maxOnScreen;
    }

    this.setPosition(this.service.options.position);

    this.emitter = this.service.emitter.subscribe(
      (toasts: SnotifyToast[]) => this.notifications = toasts
    );

  }

  setPosition(positions: [SnotifyPosition, SnotifyPosition]) {
    positions.forEach((position: SnotifyPosition) => {
      switch (position) {
        case SnotifyPosition.RIGHT:
          this.render.setStyle(this.snotify.nativeElement, 'right', this.service.options.positionOffset.horizontal);
          break;
        case SnotifyPosition.LEFT:
          this.render.setStyle(this.snotify.nativeElement, 'left', this.service.options.positionOffset.horizontal);
          break;
        case SnotifyPosition.TOP:
          this.render.setStyle(this.snotify.nativeElement, 'top', this.service.options.positionOffset.vertical);
          break;
        case SnotifyPosition.BOTTOM:
          this.render.setStyle(this.snotify.nativeElement, 'bottom', this.service.options.positionOffset.vertical);
          break;
      }
    });
  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

}
