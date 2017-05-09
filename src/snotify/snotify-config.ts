export enum SnotifyType {
  SUCCESS,
  ERROR,
  WARNING,
  INFO,
  BARE
}

export enum SnotifyPosition {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
}

export interface SnotifyConfig {
  timeout?: number;
  showProgressBar?: boolean;
  type?: SnotifyType;
  closeOnClick?: boolean;
}

export interface SnotifyOptions {
  maxOnScreen?: number;
  newOnTop?: boolean;
  position?: [SnotifyPosition, SnotifyPosition];
  positionOffset?: {horizontal?: string, vertical?: string};
}
