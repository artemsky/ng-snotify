import {
  AfterViewInit, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {SnotifyService} from '../snotify.service';
import {SnotifyToast} from './snotify-toast.model';
import {SnotifyConfig, SnotifyType} from '../snotify-config';

@Component({
  selector: 'app-snotify-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() id: number;
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('progress') progress: ElementRef;

  private config: SnotifyConfig;

  toast: SnotifyToast;
  interval: any;
  types = {
    success: false,
    warning: false,
    error: false,
    info: false,
    bare: false
  };

  constructor(private service: SnotifyService, private render: Renderer2, private zone: NgZone) { }

  ngOnInit() {
    this.config = this.service.getConfig(this.id);
    this.toast = this.service.get(this.id);
    this.getType(this.config.type);

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
  getType(type: SnotifyType) {
    switch (type) {
      case SnotifyType.SUCCESS:
        this.types.success = true;
        break;
      case SnotifyType.ERROR:
        this.types.error = true;
        break;
      case SnotifyType.WARNING:
        this.types.warning = true;
        break;
      case SnotifyType.INFO:
        this.types.info = true;
        break;
      default:
        this.types.bare = true;
        break;
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.onShow(), 50);
  }

  onClick() {
    if (this.config.closeOnClick) {
      this.service.remove(this.id, this.onRemove.bind(this));
    }
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
