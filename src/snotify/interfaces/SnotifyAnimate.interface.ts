/**
 * Snotify animation params
 * If you want more animations, you can include animate.css or write animations yourself in your styles
 * Then you'll need to share this styles with snotify component [ng-snotify] component.
 */
export interface SnotifyAnimate {
  /**
   * In animation
   *
   * @default 'fadeIn'
   */
  enter: string;
  /**
   * Out animation
   * @default 'fadeOut'
   */
  exit: string;
  /**
   * Animation time in ms
   * @default 400
   */
  time: number;
}
