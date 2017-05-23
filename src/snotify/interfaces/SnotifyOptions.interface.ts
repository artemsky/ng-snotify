import {SnotifyPosition} from '../enum/SnotifyPosition.enum';

export interface SnotifyOptions {
  maxOnScreen?: number;
  newOnTop?: boolean;
  position?: SnotifyPosition;
  transition?: number;
}
