import {SnotifyToast} from './toast/snotify-toast.model';
export enum SnotifyType {
  SUCCESS,
  ERROR,
  WARNING,
  INFO,
  BARE
}

export enum SnotifyPosition {
  TOP = 0,
  BOTTOM = 1,
  LEFT = 3,
  RIGHT = 2,
}

export enum SnotifyAction {
  onInit = 3,
  beforeDestroy = 0,
  afterDestroy = 1,
  onClick = 10,
  onHoverEnter = 11,
  onHoverLeave = 12
}


export interface SnotifyConfig {
  timeout?: number;
  showProgressBar?: boolean;
  type?: SnotifyType;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
}

export interface SnotifyOptions {
  maxOnScreen?: number;
  newOnTop?: boolean;
  position?: [SnotifyPosition, SnotifyPosition];
  positionOffset?: {horizontal?: string, vertical?: string};
}

export interface SnotifyInfo {
  action: SnotifyAction;
  toast: SnotifyToast;
}
