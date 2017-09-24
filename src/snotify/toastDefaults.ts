import {SnotifyPosition} from './enums/SnotifyPosition.enum';
import {SnotifyStyle} from './enums/SnotifyStyle.enum';
export const ToastDefaults = {
  global: {
    newOnTop: true,
    maxOnScreen: 8,
    maxAtPosition: 8
  },
  toast: {
    showProgressBar: true,
    timeout: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    bodyMaxLength: 150,
    titleMaxLength: 16,
    backdrop: -1,
    icon: null,
    html: null,
    position: SnotifyPosition.right_bottom,
    animation: {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}
    // options
    // get animation () {
    //   switch (this.position) {
    //     case SnotifyPosition.left_top:
    //       return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this.transition};
    //     case SnotifyPosition.left_center:
    //       return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this.transition};
    //     case SnotifyPosition.left_bottom:
    //       return {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: this.transition};
    //
    //     case SnotifyPosition.right_top:
    //       return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this.transition};
    //     case SnotifyPosition.right_center:
    //       return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this.transition};
    //     case SnotifyPosition.right_bottom:
    //       return {enter: 'fadeInRight', exit: 'fadeOutRight', time: this.transition};
    //
    //     case SnotifyPosition.center_top:
    //       return {enter: 'fadeInDown', exit: 'fadeOutUp', time: this.transition};
    //     case SnotifyPosition.center_center:
    //       return {enter: 'fadeIn', exit: 'fadeOut', time: this.transition};
    //     case SnotifyPosition.center_bottom:
    //       return {enter: 'fadeInUp', exit: 'fadeOutDown', time: this.transition};
    //   }
    // },
    // set animation (animation: SnotifyAnimate) {
    //   this.animation = animation;
    // }
  },
  type: {
    [SnotifyStyle.prompt]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ],
      placeholder: 'Enter answer here...',
      type: SnotifyStyle.prompt,
    },
    [SnotifyStyle.confirm]: {
      timeout: 0,
      closeOnClick: false,
      buttons: [
        {text: 'Ok', action: null, bold: true},
        {text: 'Cancel', action: null, bold: false},
      ],
      type: SnotifyStyle.confirm,
    },
    [SnotifyStyle.simple]: {
      type: SnotifyStyle.simple
    },
    [SnotifyStyle.success]: {
      type: SnotifyStyle.success
    },
    [SnotifyStyle.error]: {
      type: SnotifyStyle.error
    },
    [SnotifyStyle.warning]: {
      type: SnotifyStyle.warning
    },
    [SnotifyStyle.info]: {
      type: SnotifyStyle.info
    },
    [SnotifyStyle.async]: {
      pauseOnHover: false,
      closeOnClick: false,
      timeout: 0,
      showProgressBar: false,
      type: SnotifyStyle.async
    }
  }
};
