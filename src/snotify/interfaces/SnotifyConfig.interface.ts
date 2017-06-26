import {SnotifyButton} from './SnotifyButton.interface';
import {SnotifyAnimate} from './SnotifyAnimate.interface';
import {SnotifyType} from '../types/Snotify.type';

export interface SnotifyConfig {
  /**
   * Toast timeout in milliseconds. 0 - Disable timeout
   * Default: 2000
   */
  timeout?: number;
  /**
   * Enable/Disable progress bar. Disabled if timeout is 0.
   * Default: true
   */
  showProgressBar?: boolean;
  /**
   * Type of toast, affects toast style.
   * It's not recommended to change it.
   * Default: Depends on toast type - success | async | error | etc...
   */
  type?: SnotifyType;
  /**
   * Enable/Disable toast close by clicking on it
   * Default: true
   */
  closeOnClick?: boolean;
  /**
   * Enable/Disable pause on mouse enter
   * Default: true
   */
  pauseOnHover?: boolean;
  /**
   * Buttons config for Confirmation & Prompt types
   * Default: `[ {text: 'Ok', action: null, bold: true}, {text: 'Cancel', action: null, bold: false} ]`
   */
  // buttons?: [SnotifyButton, SnotifyButton] | [SnotifyButton];
  buttons?: SnotifyButton[];
  /**
   * Placeholder for Prompt toast
   * Default: 'Enter answer here...'
   */
  placeholder?: string;
  /**
   * Toast title maximum length
   * Default: 16
   */
  titleMaxLength?: number;
  /**
   * Toast body maximum length
   * Default: 150
   */
  bodyMaxLength?: number;
  /**
   * Activate custom icon.
   * You should provide full tag, e.g.
   * Default: Depends on toast type
   * @example
   *  ```
   * <img src="assets/custom-icon.png"/>
   * // or
   * <svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="48px" height="48px">
   * <g><path....../></g></svg>
   * ```
   */
  icon?: string;
  /**
   * Backdrop opacity. 0.0 - 1.0
   * -1 = Disabled
   * Default: -1
   */
  backdrop?: number;
  animation?: SnotifyAnimate
}
