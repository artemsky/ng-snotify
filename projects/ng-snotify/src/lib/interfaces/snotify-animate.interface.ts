/**
 * Snotify animation params
 * If you want more animations, you can include animate.css or write animations yourself in your styles
 * Then you'll need to share this styles with snotify component [ng-snotify] component.
 */
export interface SnotifyAnimate {
  /**
   * In animation
   */
  enter: string;
  /**
   * Out animation
   */
  exit: string;
  /**
   * Animation time in ms
   */
  time: number;
}
