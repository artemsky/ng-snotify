import {
  AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {SnotifyService} from '../snotify.service';
import {SnotifyToast} from './snotify-toast.model';
import {SnotifyConfig} from "../snotify-config";

@Component({
  selector: 'app-snotify-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() id: number;
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('progress') progress: ElementRef;
  toast: SnotifyToast;
  interval: any;
  private config: SnotifyConfig;

  constructor(private service: SnotifyService, private render: Renderer2, private zone: NgZone) { }

  ngOnInit() {
    this.config = this.service.getConfig(this.id);
    this.toast = this.service.get(this.id);

    if (!this.config.showProgressBar) {
      this.service.timeout(this.toast.id, this.config.timeout, this.onRemove.bind(this));
    } else if (this.config.timeout > 0) {
      const framerate = 10;
      let progress = 0;
      const step = framerate / this.config.timeout * 100;
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
