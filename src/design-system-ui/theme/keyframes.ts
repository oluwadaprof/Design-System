import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  // general
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 }
  },
  // pulse
  pulse: {
    '50%': { opacity: 0.5 }
  },
  // loaders
  spinner: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  ellipsis: {
    from: {
      width: '0'
    },
    to: {
      width: '1.25em'
    }
  },
  // toasts
  toastHide: {
    from: {
      opacity: '1'
    },
    to: {
      opacity: '0'
    }
  },
  toastSlideIn: {
    from: {
      transform: 'translateX(calc(100% + var(--viewport-padding)))'
    },
    to: {
      transform: 'translateX(0)'
    }
  },
  toastSwipeOut: {
    from: {
      transform: 'translateX(var(--radix-toast-swipe-end-x))'
    },
    to: {
      transform: 'translateX(calc(100% + var(--viewport-padding)))'
    }
  },
  // popovers
  slideUpAndFade: {
    from: { opacity: 0, transform: 'translateY(2px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  slideRightAndFade: {
    from: { opacity: 0, transform: 'translateX(-2px)' },
    to: { opacity: 1, transform: 'translateX(0)' }
  },
  slideDownAndFade: {
    from: { opacity: 0, transform: 'translateY(-2px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  slideLeftAndFade: {
    from: { opacity: 0, transform: 'translateX(2px)' },
    to: { opacity: 1, transform: 'translateX(0)' }
  },
  // accordion
  accordionSlideDown: {
    from: {
      height: 0
    },
    to: {
      height: 'var(--radix-accordion-content-height)'
    }
  },
  accordionSlideUp: {
    from: {
      height: 'var(--radix-accordion-content-height)'
    },
    to: {
      height: 0
    }
  },
  pop: {
    from: {
      transform: 'scale(1)'
    },
    to: {
      transform: 'scale(var(--scale))'
    }
  },
  // text
  caretBlink: {
    '0%,70%,100%': { opacity: 0 },
    '20%,50%': { opacity: 1 }
  },
  // gradients
  animatedgradient: {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
})
