import { AfterContentChecked, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {SnotifyService} from './snotify.service';
import {SnotifyToast} from './toast/snotify-toast.model';
import {Subscription} from 'rxjs/Subscription';
import {SnotifyOptions} from './interfaces/SnotifyOptions.interface';
import {SnotifyInfo} from './interfaces/SnotifyInfo.interface';
import {SnotifyAction} from './enum/SnotifyAction.enum';
import {SnotifyPosition} from './enum/SnotifyPosition.enum';


@Component({
  selector: 'ng-snotify',
  templateUrl: './snotify.component.html',
  styleUrls: ['./snotify.component.scss']
})
export class SnotifyComponent implements OnInit, OnDestroy, AfterContentChecked {
  /**
   * Toasts array
   */
  notifications: SnotifyToast[];
  emitter: Subscription;
  /**
   * Listens for options has been changed
   */
  optionsSubscription: Subscription;
  /**
   * Listens for lifecycle has been triggered
   */
  lifecycleSubscription: Subscription;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSize_a: number;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSize_b: number | undefined;
  /**
   * Backdrop Opacity
   */
  backdrop: number;


  constructor(private service: SnotifyService, private render: Renderer2, private snotify: ElementRef) { }

  /**
   * Init base options. Subscribe to options, lifecycle change
   */
  ngOnInit() {
    this.setOptions(this.service.options);
    this.optionsSubscription = this.service.optionsChanged.subscribe((options: SnotifyOptions) => {
      this.setOptions(options);
    });
    this.setPosition(this.service.options.position);

    this.emitter = this.service.emitter.subscribe(
      (toasts: SnotifyToast[]) => {
        this.notifications = toasts;
        const list = this.notifications.filter(toast => toast.config.backdrop >= 0);

        if (list.length) {
          this.backdrop = 0;
          setTimeout(() => {
            this.backdrop = list[list.length - 1].config.backdrop;
          }, 10)
        } else {
          this.backdrop = 0;
          setTimeout(() => {
            this.backdrop = -1;
          }, 400)
        }
      }
    );
    this.lifecycleSubscription = this.service.lifecycle.subscribe(
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
          case SnotifyAction.onInput:
            if (this.service.onInput) {
              this.service.onInput(info.toast, info.value);
            }
            break;
        }
      }
    );

  }

  ngAfterContentChecked() {
    this.snotify.nativeElement.style.marginTop = -(this.snotify.nativeElement.offsetHeight / 2) + 'px';
  }

  /**
   * Setup global options object
   * @param options {SnotifyOptions}
   */
  setOptions(options: SnotifyOptions): void {
    if (this.service.options.newOnTop) {
      this.dockSize_a = -options.maxOnScreen;
      this.dockSize_b = undefined;
    } else {
      this.dockSize_a = 0;
      this.dockSize_b = options.maxOnScreen;
    }

    this.setPosition(options.position);
  }

  /**
   * Set notifications position
   * @param position {SnotifyPosition}
   */
  setPosition(position: SnotifyPosition): void {
    this.render.removeAttribute(this.snotify.nativeElement, 'class');
    this.render.addClass(this.snotify.nativeElement, `snotify-${position}`);
  }

  /**
   * Unsubscribe subscriptions
   */
  ngOnDestroy() {
    this.emitter.unsubscribe();
    this.optionsSubscription.unsubscribe();
    this.lifecycleSubscription.unsubscribe();
  }

}
