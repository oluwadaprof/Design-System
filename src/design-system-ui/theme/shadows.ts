import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

export const shadows = defineTokens.shadows({
  xxs: {
    value: '0 1px 2px 0 rgb(0 0 0 / 0.025)'
  },
  xs: {
    value: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
  },
  sm: {
    value: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
  },
  md: {
    value: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
  },
  lg: {
    value: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
  },
  xl: {
    value: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
  },
  '2xl': {
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  },
  darkXxs: {
    value: '0 1px 2px 0 rgb(57, 55, 63 / 0.025)'
  },
  darkXs: {
    value: '0 1px 2px 0 rgb(57, 55, 63 / 0.05)'
  },
  darkSm: {
    value: '0 1px 3px 0 rgb(57, 55, 63 / 0.1)'
  },
  darkMd: {
    value: '0 4px 6px -1px rgb(57, 55, 63 / 0.1)'
  },
  darkLg: {
    value: '0 10px 15px -3px rgb(57, 55, 63 / 0.1)'
  },
  darkXl: {
    value: '0 20px 25px -5px rgb(57, 55, 63 / 0.1)'
  },
  dark2xl: {
    value: '0 25px 50px -12px rgb(57, 55, 63 / 0.25)'
  }
})

export const semanticShadows = defineSemanticTokens.shadows({
  sXxs: {
    value: {
      base: '{shadows.xxs}',
      _dark: '{shadows.darkXxs}'
    }
  },
  sXs: {
    value: {
      base: '{shadows.xs}',
      _dark: '{shadows.darkXs}'
    }
  },
  sSm: {
    value: {
      base: '{shadows.sm}',
      _dark: '{shadows.darkSm}'
    }
  },
  sMd: {
    value: {
      base: '{shadows.md}',
      _dark: '{shadows.darkMd}'
    }
  },
  sLg: {
    value: {
      base: '{shadows.lg}',
      _dark: '{shadows.darkLg}'
    }
  },
  sXl: {
    value: {
      base: '{shadows.xl}',
      _dark: '{shadows.darkXl}'
    }
  },
  s2xl: {
    value: {
      base: '{shadows.2xl}',
      _dark: '{shadows.dark2xl}'
    }
  }
})
