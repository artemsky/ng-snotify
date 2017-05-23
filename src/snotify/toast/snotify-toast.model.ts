import {SnotifyConfig} from '../interfaces/SnotifyConfig.interface';

export class SnotifyToast {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public config?: SnotifyConfig
  ) {}
}
