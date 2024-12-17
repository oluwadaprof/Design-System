import { defineTokens } from '@pandacss/dev'

export const borders = defineTokens.borders({
  none: { value: 'none' },

  // Subtle borders
  subtle: { value: '1px solid {colors.gray.600}' },
  subtleLight: { value: '1px solid {colors.gray.300}' },
  subtleDark: { value: '1px solid {colors.gray.800}' },

  // White border
  white: { value: '2px solid {colors.white}' },

  // Success borders
  success: { value: '1px solid {colors.green.500}' },
  successLight: { value: '1px solid {colors.green.300}' },
  successDark: { value: '1px solid {colors.green.800}' },

  // Error borders
  error: { value: '1px solid {colors.red.500}' },
  errorLight: { value: '1px solid {colors.red.300}' },
  errorDark: { value: '1px solid {colors.red.800}' },

  // Warning borders
  warning: { value: '1px solid {colors.yellow.500}' },
  warningLight: { value: '1px solid {colors.yellow.300}' },
  warningDark: { value: '1px solid {colors.yellow.800}' },

  // Information borders
  info: { value: '1px solid {colors.blue.500}' },
  infoLight: { value: '1px solid {colors.blue.300}' },
  infoDark: { value: '1px solid {colors.blue.800}' },

  // Primary borders
  primary: { value: '1px solid {colors.indigo.500}' },
  primaryLight: { value: '1px solid {colors.indigo.300}' },
  primaryDark: { value: '1px solid {colors.indigo.800}' },

  // Secondary borders
  secondary: { value: '1px solid {colors.purple.500}' },
  secondaryLight: {
    value: '1px solid {colors.purple.300}'
  },
  secondaryDark: { value: '1px solid {colors.purple.800}' },

  // Accent borders
  accent: { value: '1px solid {colors.pink.500}' },
  accentLight: { value: '1px solid {colors.pink.300}' },
  accentDark: { value: '1px solid {colors.pink.800}' }
})
