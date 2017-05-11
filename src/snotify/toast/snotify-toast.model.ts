import {SnotifyConfig} from '../snotify-config';

export class SnotifyToast {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public config?: SnotifyConfig
  ) {}
}
