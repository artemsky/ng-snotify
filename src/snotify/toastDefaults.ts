import {SnotifyPosition} from './enums/SnotifyPosition.enum';
import {SnotifyStyle} from './enums/SnotifyStyle.enum';
import {SnotifyAnimate} from './interfaces/SnotifyAnimate.interface';

export const ToastDefaults = {
  global: {
    showProgressBar: true,
    timeout: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    bodyMaxLength: 150,
    titleMaxLength: 16,
    backdrop: -1,
    // options
    newOnTop: true,
    position: SnotifyPosition.right_bottom,
    maxOnScreen: 8,
    maxAtPosition: 8,
    maxHeight: 300,
    transition: 400,
    // prompt
    placeholder: 'Enter answer here...',
    // prompt & confirm
    buttons: [
      {text: 'Ok', action: null, bold: true},
      {text: 'Cancel', action: null, bold: false},
    ],
    get animation () {
      switch (this.position) {
        case SnotifyPosition.left_top:
          return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this.transition};
        case SnotifyPosition.left_center:
          return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this.transition};
        case SnotifyPosition.left_bottom:
          return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this.transition};

        case SnotifyPosition.right_top:
          return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this.transition};
        case SnotifyPosition.right_center:
          return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this.transition};
        case SnotifyPosition.right_bottom:
          return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this.transition};

        case SnotifyPosition.center_top:
          return {enter: 'fadeInDown', exit: 'fadeOutUp', time: this.transition};
        case SnotifyPosition.center_center:
          return {enter: 'fadeIn', exit: 'fadeOut', time: this.transition};
        case SnotifyPosition.center_bottom:
          return {enter: 'fadeInUp', exit: 'fadeOutDown', time: this.transition};
      }
    },
    set animation (animation: SnotifyAnimate) {
      this.animation = animation;
    }
  },
  toast: {
    [SnotifyStyle.prompt]: {
      timeout: 0,
      closeOnClick: false,
      type: SnotifyStyle.prompt,
    },
    [SnotifyStyle.confirm]: {
      closeOnClick: false,
      type: SnotifyStyle.confirm,
    },
    [SnotifyStyle.simple]: {
      type: SnotifyStyle.simple,
      buttons: null
    },
    [SnotifyStyle.success]: {
      type: SnotifyStyle.success,
      buttons: null
    },
    [SnotifyStyle.error]: {
      type: SnotifyStyle.error,
      buttons: null
    },
    [SnotifyStyle.warning]: {
      type: SnotifyStyle.warning,
      buttons: null
    },
    [SnotifyStyle.info]: {
      type: SnotifyStyle.info,
      buttons: null
    },
    [SnotifyStyle.async]: {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: SnotifyStyle.async,
      buttons: null
    }
  }
};
