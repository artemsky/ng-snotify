import { SnotifyTypeType } from '../types/snotify-type.type';

/**
 * Toast styles
 */
export interface SnotifyStyles {
  simple: SnotifyTypeType;
  success: SnotifyTypeType;
  error: SnotifyTypeType;
  warning: SnotifyTypeType;
  info: SnotifyTypeType;
  async: SnotifyTypeType;
  confirm: SnotifyTypeType;
  prompt: SnotifyTypeType;
}
