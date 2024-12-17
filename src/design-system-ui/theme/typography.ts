import { defineTextStyles, defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
  aventa: {
    value: 'var(--font-aventa), sans-serif'
  },
  inter: {
    value: 'var(--font-inter), sans-serif'
  }
})

export const fontSizes = defineTokens.fontSizes({
  '0.5': {
    value: '1rem'
  },
  1: {
    value: '1.2rem'
  },
  2: {
    value: '1.3rem'
  },
  '2.5': {
    value: '1.45rem'
  },
  3: {
    value: '1.6rem' // base
  },
  4: {
    value: '1.8rem'
  },
  5: {
    value: '2rem'
  },
  6: {
    value: '2.4rem'
  },
  7: {
    value: '2.8rem'
  },
  8: {
    value: '3.5rem'
  },
  9: {
    value: '6rem'
  }
})

export const fontWeights = defineTokens.fontWeights({
  100: { value: '100' },
  200: { value: '200' },
  300: { value: '300' },
  400: { value: '400' },
  500: { value: '500' },
  600: { value: '600' },
  700: { value: '700' },
  800: { value: '800' },
  900: { value: '900' }
})

export const letterSpacings = defineTokens.letterSpacings({
  1: {
    value: '0.0025em'
  },
  2: {
    value: '0em'
  },
  3: {
    value: '0em'
  },
  4: {
    value: '-0.0025em'
  },
  5: {
    value: '-0.005em'
  },
  6: {
    value: '-0.00625em'
  },
  7: {
    value: '-0.0075em'
  },
  8: {
    value: '-0.01em'
  },
  9: {
    value: '-0.025em'
  }
})

export const lineHeights = defineTokens.lineHeights({
  1: {
    value: '1.6rem'
  },
  2: {
    value: '2rem'
  },
  3: {
    value: '2.4rem'
  },
  4: {
    value: '2.6rem'
  },
  5: {
    value: '2.8rem'
  },
  6: {
    value: '3.0rem'
  },
  7: {
    value: '3.6rem'
  },
  8: {
    value: '4rem'
  },
  9: {
    value: '6rem'
  }
})

export const textStyles = defineTextStyles({
  body: {
    value: {
      fontWeight: '400',
      fontSize: '2',
      lineHeight: '2',
      letterSpacing: '2'
    }
  },
  pageHeader: {
    value: {
      fontWeight: '500',
      fontSize: '3',
      lineHeight: '3',
      letterSpacing: '3'
    }
  },
  modalTitle: {
    value: {
      fontWeight: '500',
      fontSize: '2',
      lineHeight: '2',
      letterSpacing: '2'
    }
  },
  label: {
    value: {
      fontWeight: '500',
      fontSize: '1',
      lineHeight: '1',
      letterSpacing: '1'
    }
  },
  error: {
    value: {
      fontWeight: '500',
      fontSize: '1',
      lineHeight: '1',
      letterSpacing: '1'
    }
  }
})
