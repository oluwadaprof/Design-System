import { cva } from '@design-system-ui/styled-system/css'

export const avatarStyles = cva({
  variants: {
    size: {
      xl: {
        w: '6rem',
        h: '6rem',
        fontSize: '2'
      },
      md: {
        w: '3.4rem',
        h: '3.4rem',
        fontSize: '1'
      },
      sm: {
        w: '2.4rem',
        h: '2.4rem',
        fontSize: '1'
      },
      xs: {
        w: '2rem',
        h: '2rem',
        fontSize: '1'
      },
      xxs: {
        w: '1.8rem',
        h: '1.8rem',
        fontSize: '1'
      },
      auto: {}
    },
    shape: {
      none: {
        rounded: 'none'
      },
      xs: {
        rounded: 'xs'
      },
      sm: {
        rounded: 's,'
      },
      md: {
        rounded: 'md'
      },
      lg: {
        rounded: 'lg'
      },
      xl: {
        rounded: 'xl'
      },
      '2xl': {
        rounded: '2xl'
      },
      '3xl': {
        rounded: '3xl'
      },
      '4xl': {
        rounded: '4xl'
      },
      full: {
        rounded: 'full'
      }
    }
  }
})
