import {SnotifyType} from '../enum/SnotifyType.enum';
import {SnotifyButton} from './SnotifyButton.interface';

export interface SnotifyConfig {
  /**
   * Toast timeout in milliseconds. 0 - Disable timeout
   */
  timeout?: number;
  /**
   * Enable/Disable progress bar. Disabled if timeout is 0.
   * Default: 2000
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
  buttons?: [SnotifyButton, SnotifyButton] | [SnotifyButton];
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
}
