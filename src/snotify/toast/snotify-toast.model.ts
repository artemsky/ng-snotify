import {SnotifyConfig} from '../snotify-config';

export class SnotifyToast {
  constructor(
    public id: Date | number | string,
    public title: string,
    public body: string,
    public config?: SnotifyConfig
  ) {}
}
