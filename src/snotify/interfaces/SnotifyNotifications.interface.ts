import {SnotifyToast} from '../toast/snotify-toast.model';

export interface SnotifyNotifications {
  left_top?: SnotifyToast[];
  left_center?: SnotifyToast[];
  left_bottom?: SnotifyToast[];

  right_top?: SnotifyToast[];
  right_center?: SnotifyToast[];
  right_bottom?: SnotifyToast[];

  center_top?: SnotifyToast[];
  center_center?: SnotifyToast[];
  center_bottom?: SnotifyToast[];
}
