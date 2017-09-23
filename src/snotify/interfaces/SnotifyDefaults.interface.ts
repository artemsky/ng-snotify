// tslint:disable:no-trailing-whitespace
import {SnotifyConfig} from './SnotifyConfig.interface';

/**
 * Global configuration object
 */
export interface SnotifyDefaults {
  global: SnotifyConfig,
  toast: {
    [key: string]: SnotifyConfig
  }
}
