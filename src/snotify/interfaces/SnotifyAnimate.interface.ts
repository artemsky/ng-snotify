export interface SnotifyAnimate {
  enter: 'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | string;
  exit: 'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string;
  time: number;
}
