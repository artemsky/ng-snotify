export interface SnotifyAnimate {
  /**
   * In animation
   * Default: depends on toast position
   * @type {'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string}
   */
  enter: 'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | string;
  /**
   * Out animation
   * Default: depends on toast position
   * @type {'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string}
   */
  exit: 'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string;
  /**
   * Animation time in ms
   * Default: 400
   * @type {number}
   */
  time: number;
}
