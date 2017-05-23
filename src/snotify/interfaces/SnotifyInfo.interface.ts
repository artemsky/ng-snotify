import {SnotifyToast} from '../toast/snotify-toast.model';
import {SnotifyAction} from '../enum/SnotifyAction.enum';

export interface SnotifyInfo {
  action: SnotifyAction;
  toast: SnotifyToast;
}
