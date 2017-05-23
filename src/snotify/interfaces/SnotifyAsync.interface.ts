import {SnotifyConfig} from './SnotifyConfig.interface';

export interface SnotifyAsync {
  title?: string;
  body?: string;
  config?: SnotifyConfig;
}
