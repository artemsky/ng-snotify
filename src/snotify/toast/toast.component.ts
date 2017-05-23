import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SnotifyService} from '../snotify.service';
import {SnotifyToast} from './snotify-toast.model';
import {SnotifyAction} from '../enum/SnotifyAction.enum';
import {SnotifyType} from '../enum/SnotifyType.enum';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-snotify-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() toast: SnotifyToast;

  toastDeletedSubscription: Subscription;
  toastChangedSubscription: Subscription;

  state = {
    toast: {
      progress: 0,
      isShowing: false,
      isRemoving: false,
      isDestroying: false
    },
    prompt: {
      input: '',
      isPromptFocused: false,
      isPromptActive: false
    }
  };

  transitionTime = 400;
  refreshRate = 10;
  interval: any;

  types = {
    success: false,
    warning: false,
    error: false,
    info: false,
    simple: false,
    async: false,
    confirm: false,
    prompt: false,
  };

  constructor(private service: SnotifyService) { }

  /*
  Life cycles
   */

  /**
   * Init base options. Subscribe to toast changed, toast deleted
   */
  ngOnInit() {
    this.transitionTime = this.service.options.transition;
    this.initToast();
    this.toastChangedSubscription = this.service.toastChanged.subscribe(
      (toast: SnotifyToast) => {
        if (this.toast.id === toast.id) {
          this.initToast(toast);
        }
      }
    );

    this.toastDeletedSubscription = this.service.toastDeleted.subscribe(
      (id) => {
        if (this.toast.id === id) {
          this.onRemove().then(() => {
            this.service.remove(id, true);
          });
        }
      }
    );
  }

  /**
   * Delay on toast show
   */
  ngAfterViewInit() {
    setTimeout(() => this.onShow(), 50);
  }

  /**
   * Unsubscribe subscriptions
   */
  ngOnDestroy(): void {
    this.lifecycle(SnotifyAction.afterDestroy);
    this.toastChangedSubscription.unsubscribe();
    this.toastDeletedSubscription.unsubscribe();
  }

  /*
  Event hooks
   */

  /**
   * Trigger OnClick lifecycle
   */
  onClick() {
    this.lifecycle(SnotifyAction.onClick);
    if (this.toast.config.closeOnClick) {
      this.service.remove(this.toast.id);
    }
  }

  /**
   * Trigger beforeDestroy lifecycle. Removes toast
   */
  onRemove() {
    clearInterval(this.interval);
    this.state.toast.isDestroying = true;
    this.lifecycle(SnotifyAction.beforeDestroy);
    this.state.toast.isRemoving = true;
    return new Promise((resolve, reject) => setTimeout(resolve, this.service.options.transition));
  }

  /**
   * Trigger onInit lifecycle
   */
  onShow() {
    this.state.toast.isShowing = true;
    this.lifecycle(SnotifyAction.onInit);
  }

  /**
   * Trigger onHoverEnter lifecycle
   */
  onMouseEnter() {
    this.lifecycle(SnotifyAction.onHoverEnter);
    if (this.toast.config.pauseOnHover) {
      clearInterval(this.interval);
    }
  }

  /**
   * Trigger onHoverLeave lifecycle
   */
  onMouseLeave() {
    if (this.toast.config.pauseOnHover && !this.types.prompt) {
      this.startTimeout(this.state.toast.progress);
    }
    this.lifecycle(SnotifyAction.onHoverLeave);
  }

  // Prompt

  /**
   * Expand input
   */
  onPromptEnter() {
    this.state.prompt.isPromptActive = true;
  }

  /**
   * Collapse input
   */
  onPromptLeave() {
    if (!this.state.prompt.input.length && !this.state.prompt.isPromptFocused) {
      this.state.prompt.isPromptActive = false;
    }
  }

  /*
   Common
   */

  /**
   * Initialize base toast config
   * @param toast {SnotifyToast}
   */
  initToast(toast?: SnotifyToast) {
    if (toast) {
      if (this.toast.config.type !== toast.config.type) {
        clearInterval(this.interval);
      }
      this.toast = toast;
    }

    this.setType(this.toast.config.type);
    if (this.toast.config.timeout > 0) {
      this.startTimeout(0);
    } else {
      this.toast.config.showProgressBar = false;
    }
  }

  /**
   * Setup toast type
   * @param type {SnotifyType}
   */
  setType(type: SnotifyType) {
    this.resetTypes();

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
      case SnotifyType.ASYNC:
        this.types.async = true;
        break;
      case SnotifyType.CONFIRM:
        this.types.confirm = true;
        break;
      case SnotifyType.PROMPT:
        this.types.prompt = true;
        break;
      default:
        this.types.simple = true;
        break;
    }
  }

  /**
   * Reset toast type
   */
  resetTypes() {
    this.types.info =
    this.types.error =
    this.types.warning =
    this.types.simple =
    this.types.success =
    this.types.async =
    this.types.confirm =
    this.types.prompt =
      false;
  }

  /**
   * Start progress bar
   * @param currentProgress {Number}
   */
  startTimeout(currentProgress: number) {
    if (this.state.toast.isDestroying) {
      return;
    }
    this.state.toast.progress = currentProgress;
    const step = this.refreshRate / this.toast.config.timeout * 100;
      this.interval = setInterval(() => {
        this.state.toast.progress += step;
        if (this.state.toast.progress >= 100) {
            this.service.remove(this.toast.id);
        }
      }, this.refreshRate);
  }

  /**
   * Lifesycle trigger
   * @param action {SnotifyAction}
   */
  lifecycle(action: SnotifyAction) {
    return this.service.lifecycle.next({
      action,
      toast: this.toast
    });
  }

}
