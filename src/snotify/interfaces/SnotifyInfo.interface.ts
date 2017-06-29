import {SnotifyToast} from '../toast/snotify-toast.model';
import {SnotifyAction} from '../enum/SnotifyAction.enum';

/**
 * Toast lifecycle information
 */
export interface SnotifyInfo {
  /**
   * Toast lifecycle action (onInit, onDestroy, etc...)
   * @type {SnotifyAction}
   */
  action: SnotifyAction;
  /**
   * Toast which triggered an action
   * @type {SnotifyToast}
   */
  toast: SnotifyToast;
  /**
   * Prompt toast input value
   * @type {string}
   */
  value?: string;
}
