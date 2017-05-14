import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyAction, SnotifyInfo, SnotifyOptions, SnotifyPosition} from './snotify-config';

@Component({
  selector: 'app-snotify',
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
    this.setOptions(this.service.options);
    this.service.optionsChanged.subscribe((options: SnotifyOptions) => {
      this.setOptions(options);
    });
    this.setPosition(this.service.options.position);

    this.emitter = this.service.emitter.subscribe(
      (toasts: SnotifyToast[]) => this.notifications = toasts
    );
    this.service.lifecycle.subscribe(
      (info: SnotifyInfo) => {
        switch (info.action) {
          case SnotifyAction.onInit:
            if (this.service.onInit) {
              this.service.onInit(info.toast);
            }
            break;
          case SnotifyAction.onClick:
            if (this.service.onClick) {
              this.service.onClick(info.toast);
            }
            break;
          case SnotifyAction.onHoverEnter:
            if (this.service.onHoverEnter) {
              this.service.onHoverEnter(info.toast);
            }
            break;
          case SnotifyAction.onHoverLeave:
            if (this.service.onHoverLeave) {
              this.service.onHoverLeave(info.toast);
            }
            break;
          case SnotifyAction.beforeDestroy:
            if (this.service.beforeDestroy) {
              this.service.beforeDestroy(info.toast);
            }
            break;
          case SnotifyAction.afterDestroy:
            if (this.service.afterDestroy) {
              this.service.afterDestroy(info.toast);
            }
            break;
        }
      }
    );

  }

  setOptions(options: SnotifyOptions) {
    if (this.service.options.newOnTop) {
      this.dockSize_a = -options.maxOnScreen;
      this.dockSize_b = undefined;
    } else {
      this.dockSize_a = 0;
      this.dockSize_b = options.maxOnScreen;
    }

    this.setPosition(options.position);
  }

  setPosition(positions: [SnotifyPosition, SnotifyPosition]) {
    this.render.removeStyle(this.snotify.nativeElement, 'right');
    this.render.removeStyle(this.snotify.nativeElement, 'left');
    this.render.removeStyle(this.snotify.nativeElement, 'bottom');
    this.render.removeStyle(this.snotify.nativeElement, 'top');
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
