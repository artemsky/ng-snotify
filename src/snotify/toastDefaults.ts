import {SnotifyPosition} from './enum/SnotifyPosition.enum';
import {SnotifyType} from './enum/SnotifyType.enum';

export const ToastDefaults = {
  global: {
    config: {
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
      get animation() {
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
      }
    },
  },
  [SnotifyType.prompt]: {
    timeout: 0,
    closeOnClick: false,
    type: SnotifyType.prompt,
  },
  [SnotifyType.confirm]: {
    closeOnClick: false,
    type: SnotifyType.confirm,
  },
  [SnotifyType.simple]: {
    type: SnotifyType.simple
  },
  [SnotifyType.success]: {
    type: SnotifyType.success
  },
  [SnotifyType.error]: {
    type: SnotifyType.error
  },
  [SnotifyType.warning]: {
    type: SnotifyType.warning
  },
  [SnotifyType.info]: {
    type: SnotifyType.info
  }
};
