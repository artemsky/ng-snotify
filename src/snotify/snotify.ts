import {SnotifyConfig} from './snotify-config';

export interface Snotify {
  title: string;
  body: string;
  config?: SnotifyConfig;
}
