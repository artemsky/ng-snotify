// tslint:disable:no-trailing-whitespace
import {SnotifyConfig} from './SnotifyToastConfig.interface';
import {SnotifyGlobalConfig} from './SnotifGlobalConfig.interface';

/**
 * Global configuration object
 */
export interface SnotifyDefaults {
  global?: SnotifyGlobalConfig,
  toast?: SnotifyConfig,
  type?: {
    [key: string]: SnotifyConfig
  }
}
