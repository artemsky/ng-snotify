import {SnotifyToast} from '../toast/snotify-toast.model';
import {SnotifyAction} from '../enum/SnotifyAction.enum';

/**
 * Toast lifecycle information
 */
export interface SnotifyInfo {
  /**
   * Toast lifecycle action (onInit, onDestroy, etc...)
   */
  action: SnotifyAction;
  /**
   * Toast which triggered an action
   */
  toast: SnotifyToast;
}
