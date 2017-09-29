import {SnotifyToast} from '../toast/snotify-toast.model';
/**
 * Buttons config.
 */

export interface SnotifyButton {
  /**
   * Button text
   * @type {string}
   * @default 'Yes' | 'Cancel'
   */
  text: string;
  /**
   * Action which will be called after button click
   * @type {function}
   * @param text? {string}
   * @returns {void}
   * @default null | () => this.remove(id)
   */
  action?: (toast: SnotifyToast) => void;
  /**
   * Should button text be bold.
   * @default true | false
   */
  bold?: boolean;
}
