import {SnotifyPosition} from '../enum/SnotifyPosition.enum';
/**
 * Global configuration object
 */
export interface SnotifyOptions {
  /**
   * Max toast items on screen.
   * Default: 8
   *
   * For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.
   * With this option, 3 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.
   */
  maxOnScreen?: number;
  /**
   * Should new items come from top or bottom side.
   * Default: true
   *
   * This option created for styling purposes.
   * For example, if your toast position is TOP-RIGHT. Its not very nice, when items comes from top and pulls down all other toasts
   */
  newOnTop?: boolean;
  /**
   * Toasts position on screen
   * Default: right_bottom
   */
  position?: SnotifyPosition;
  /**
   * Transition on toast show/hide animation
   * Default: 400
   */
  transition?: number;
  /**
   * Toast maximum height in pixels
   * Default: 300px
   */
  maxHeight?: number;
}
