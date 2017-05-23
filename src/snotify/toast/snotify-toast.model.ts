import {SnotifyConfig} from '../interfaces/SnotifyConfig.interface';

/**
 * Toast main model
 */
export class SnotifyToast {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public config?: SnotifyConfig
  ) {}
}
