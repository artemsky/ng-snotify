// tslint:disable:no-trailing-whitespace
import { SnotifyToastConfig } from './snotify-toast-config.interface';
import { SnotifyGlobalConfig } from './snotif-global-config.interface';

/**
 * Global configuration object
 */
export interface SnotifyDefaults {
  global?: SnotifyGlobalConfig;
  toast?: SnotifyToastConfig;
  type?: {
    [key: string]: SnotifyToastConfig;
  };
}
