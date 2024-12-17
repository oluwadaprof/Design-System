import { defineTokens } from '@pandacss/dev'

export const animations = defineTokens.animations({
  // spinner
  loader: {
    value: 'spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite'
  },
  ellipsis: {
    value: 'ellipsis steps(4, end) 900ms infinite'
  },

  // toast
  toastIn: {
    value: 'toastSlideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)'
  },
  toastOut: {
    value: 'toastHide 100ms ease-out'
  },

  // popover
  popoverUpIn: {
    value: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  },
  popoverDownIn: {
    value: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  },
  popoverLeftIn: {
    value: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  },
  popoverRightIn: {
    value: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  },
  popoverHide: {
    value: 'fadeOut 400ms ease-out'
  },
  fadeElementIn: {
    value: 'fadeIn 400ms ease-out'
  },
  fadeElementOut: {
    value: 'fadeOut 400ms ease-out'
  },

  // accordion
  accordionUp: {
    value: 'accordionSlideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
  },
  accordionDown: {
    value: 'accordionSlideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)'
  },
  pulsate: {
    value: '2s cubic-bezier(0.4, 0, 0.6, 1) 0s infinite normal none running pulse'
  },

  //modal
  modalOpen: {
    value: 'fadeIn 400ms ease-in'
  },
  modalClose: {
    value: 'fadeOut 400ms ease-out'
  },

  // text
  caretBlink: {
    value: 'caretBlink 1.25s ease-out infinite'
  },

  // gradients
  animatedGradient: {
    value: 'animatedgradient 3s ease alternate infinite'
  }
})
