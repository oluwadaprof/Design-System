import { defineConfig } from '@pandacss/dev'

import {designsystemui} from '@design-system-ui/theme/preset'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [designsystemui],

  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  // CSS variables prefix
  prefix: 'impulse',

  // Whether to minify the output
  minify: true,

  // The output directory for your css system
  outdir: './src/design-system-ui/styled-system',

  // Polyfill CSS @layers at-rules for older browsers.
  polyfill: true,

  // The output dir map
  importMap: '@design-system-ui/styled-system'
})
