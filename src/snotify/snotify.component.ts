import {Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyOptions, SnotifyPosition} from './snotify-config';

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
