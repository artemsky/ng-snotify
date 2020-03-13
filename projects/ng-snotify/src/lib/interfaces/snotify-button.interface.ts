import { SnotifyToast } from '../models/snotify-toast.model';
/**
 * Buttons config.
 */

/**
 * Buttons config
 */
export interface SnotifyButton {
  /**
   * Button text
   */
  text: string;
  /**
   * Action which will be called after buttons click
   * @param text? string
   * @returns void
   */
  action?: (toast: SnotifyToast) => void;
  /**
   * Should buttons text be bold.
   */
  bold?: boolean;
}
