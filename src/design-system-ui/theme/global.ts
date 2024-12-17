import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  '*': {
    outline: 'none',

    '&:focus-visible': {
      // border: 'subtle'
    }
  },
  html: {
    fontSize: '62.5%',
    backgroundColor: 'background.app',
    color: 'sAppText',
    fontFamily: 'inter'
  },
  body: {
    fontSize: '2',
    fontFamily: 'inter',
    fontWeight: '400',
    height: '100vh',
    overflow: 'hidden'
  },

  // File upload button override
  'input[type=file]::-webkit-file-upload-button': {
    cursor: 'pointer'
  },

  // ag-grid
  '.ag-dnd-ghost': {
    bg: 'sMutedBackground !important',
    backdropFilter: 'blur(4rem)',
    rounded: '1rem !important',
    p: '0 !important',
    display: 'flex !important',
    alignItems: 'center !important',
    px: '1rem !important',
    h: '3rem !important'
  },

  /* To control scrollbars on different browsers */
  '::-webkit-scrollbar': {
    w: '0.4rem',
    h: '0.4rem'
  },

  '::-webkit-scrollbar-track': {
    rounded: '0.2rem',

    '&:hover': {
      bg: 'sMutedBackground'
    }
  },

  '::-webkit-scrollbar-thumb': {
    bg: 'sMutedBackground',
    rounded: 'xl',

    '&:hover': {
      bg: 'sMutedBackground'
    }
  }

  // crisp
  // '#crisp-chatbox': {
  //   '& .cc-nsge': {
  //     display: 'none !important'
  //   }
  // }
})
