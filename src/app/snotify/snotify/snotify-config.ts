export enum SnotifyType {
  SUCCESS,
  ERROR,
  WARNING,
  INFO,
  BARE
}
export interface SnotifyConfig {
  timeout?: number;
  showProgressBar?: boolean;
  type?: SnotifyType;
}
