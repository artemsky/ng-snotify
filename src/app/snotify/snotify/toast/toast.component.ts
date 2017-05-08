import {
  AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {SnotifyService} from '../snotify.service';
import {Toast} from './toast.model';
import {Snotify} from "../snotify";

@Component({
  selector: 'app-snotify-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() id: number;
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('progress') progress: ElementRef;
  toast: Toast;
  interval: any;
  private config: Snotify;

  constructor(private service: SnotifyService, private render: Renderer2, private zone: NgZone) { }

  ngOnInit() {
    this.toast = this.service.get(this.id);
    this.config = this.service.getConfig();
    if (!this.config.showProgressBar) {
      this.service.timeout(this.toast.id, this.toast.timeout, this.onRemove.bind(this));
    } else if (this.toast.timeout > 0) {
      const framerate = 10;
      let progress = 0;
      const step = framerate / this.toast.timeout * 100;
      this.zone.runOutsideAngular(() => {
        this.interval = setInterval(() => {
          progress += step;
          if (progress >= 100) {
            this.zone.run(() => {
              this.service.remove(this.id, this.onRemove.bind(this));
            });
          }
          this.render.setStyle(this.progress.nativeElement, 'width', progress + '%');
        }, framerate);
      });

    } else {
      this.config.showProgressBar = false;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.onShow(), 50);
  }

  onClick() {
    this.service.remove(this.id, this.onRemove.bind(this));
  }

  onRemove() {
    this.render.addClass(this.wrapper.nativeElement, 'snotify-remove');
  }

  onShow() {
    this.render.addClass(this.wrapper.nativeElement, 'snotify-show');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
