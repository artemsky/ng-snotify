import {SnotifyStyle} from '../enums/SnotifyStyle.enum';
import {SnotifyType} from '../types/snotify.type';
import {SnotifyAnimate} from './SnotifyAnimate.interface';
import {SafeHtml} from '@angular/platform-browser';
import {SnotifyPosition} from '../enums/SnotifyPosition.enum';
import {SnotifyButton} from './SnotifyButton.interface';
import {SnotifyToastConfig} from './SnotifyToastConfig.interface';
import {SnotifyToast} from '../toast/snotify-toast.model';

export interface ProcessedSnotifyGlobalConfig {
  maxOnScreen: number;
  maxAtPosition: number;
  newOnTop: boolean;
}

/**
 * Toast configuration object after user provided defaults are merged with standard defaults
 */
export interface ProcessedSnotifyToastConfig {
  timeout: number;
  showProgressBar: boolean;
  type: SnotifyType;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  buttons?: SnotifyButton[];
  placeholder?: string;
  titleMaxLength: number;
  bodyMaxLength: number;
  icon: string | null;
  iconClass: string | null;
  backdrop: number;
  animation: SnotifyAnimate;
  html: string | SafeHtml | null;
  position: SnotifyPosition;
}

/**
 * Global configuration object after user provided defaults are merged with standard defaults
 */
export interface ProcessedSnotifyDefaults {
  global: ProcessedSnotifyGlobalConfig,
  toast: ProcessedSnotifyToastConfig,
  type: {
    [key: string]: SnotifyToastConfig,
  }
}
