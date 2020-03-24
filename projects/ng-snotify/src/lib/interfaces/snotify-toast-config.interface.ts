import { SnotifyButton } from './snotify-button.interface';
import { SnotifyAnimate } from './snotify-animate.interface';
import { SnotifyTypeType } from '../types/snotify-type.type';
import { SafeHtml } from '@angular/platform-browser';
import { SnotifyPositionType } from '../types';

/**
 * Toast configuration object
 */
export interface SnotifyToastConfig {
  /**
   * Toast timeout in milliseconds.
   * Disable timeout = 0
   */
  timeout?: number;
  /**
   * Enable/Disable progress bar.
   * Disabled if timeout is 0.
   */
  showProgressBar?: boolean;
  /**
   * Type of toast, affects toast style.
   * It's not recommended to change it.
   * Depends on toast type.
   */
  type?: SnotifyTypeType;
  /**
   * Should toast close on click?
   */
  closeOnClick?: boolean;
  /**
   * Should timeout pause on hover?
   */
  pauseOnHover?: boolean;
  /**
   * Buttons config.
   */
  buttons?: SnotifyButton[];
  /**
   * Placeholder for Prompt toast
   */
  placeholder?: string;
  /**
   * Toast title maximum length
   */
  titleMaxLength?: number;
  /**
   * Toast body maximum length
   */
  bodyMaxLength?: number;
  /**
   * Activate custom icon.
   * You should provide full tag, e.g.
   * ```html
   * <img src="assets/custom-icon.png"/>
   * ```
   * ```html
   * <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="48px" height="48px">
   *     <g><path....../></g>
   * </svg>
   * ```
   */
  icon?: string;

  /**
   * Custom icon class.
   */
  iconClass?: string;
  /**
   * Backdrop opacity.
   * * **Range:** `0.0 - 1.0`.
   * * **Disabled:** `-1`
   */
  backdrop?: number;
  /**
   * Animation config
   */
  animation?: SnotifyAnimate;
  /**
   * Html string witch overrides toast content
   */
  html?: string | SafeHtml;
  /**
   * Toasts position on screen
   */
  position?: SnotifyPositionType;
}
