import {SnotifyConfig} from './SnotifyConfig.interface';

export interface Snotify {
  /**
   * Toast Title
   */
  title: string;
  /**
   * Toast message
   */
  body: string;
  /**
   * Config object
   */
  config?: SnotifyConfig;
}
