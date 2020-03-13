import { SnotifyToastConfig } from './snotify-toast-config.interface';
import { SafeHtml } from '@angular/platform-browser';

/**
 * Snotify toast params
 */
export interface Snotify {
  /**
   * Toast Title
   */
  title?: string;
  /**
   * Toast message
   */
  body?: string;
  /**
   * Config object
   */
  config?: SnotifyToastConfig;
  /**
   * Html content
   */
  html?: string | SafeHtml;
}
