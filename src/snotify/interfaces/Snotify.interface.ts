import {SnotifyConfig} from './SnotifyConfig.interface';

export interface Snotify {
  title: string;
  body: string;
  config?: SnotifyConfig;
}
