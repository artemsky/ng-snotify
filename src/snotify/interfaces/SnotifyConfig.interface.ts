import {SnotifyType} from '../enum/SnotifyType.enum';
import {SnotifyButton} from './SnotifyButton.interface';

export interface SnotifyConfig {
  timeout?: number;
  showProgressBar?: boolean;
  type?: SnotifyType;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  buttons?: [SnotifyButton, SnotifyButton] | [SnotifyButton];
}
