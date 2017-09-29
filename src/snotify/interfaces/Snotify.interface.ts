import {SnotifyConfig} from './SnotifyToastConfig.interface';
import {SafeHtml} from '@angular/platform-browser';

/**
 * Snotify toast params
 */
export interface Snotify {
  /**
   * Toast Title
   * @type {string}
   */
  title?: string;
  /**
   * Toast message
   * @type {string}
   */
  body?: string;
  /**
   * Config object
   * @type {SnotifyConfig}
   */
  config?: SnotifyConfig;
  /**
   * Html content
   */
  html?: string | SafeHtml;
}
