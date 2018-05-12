import {SnotifyToast} from '../toast/snotify-toast.model';
/**
 * Buttons config.
 */

/**
 * Buttons config
 */
export interface SnotifyButton {
  /**
   * Button text
   * @type {string}
   */
  text: string;
  /**
   * Action which will be called after button click
   * @type {function}
   * @param text? {string}
   * @returns {void}
   * @default this.remove(id)
   */
  action?: ((toast: SnotifyToast) => void) | null;
  /**
   * Should button text be bold.
   */
  bold?: boolean;
}
