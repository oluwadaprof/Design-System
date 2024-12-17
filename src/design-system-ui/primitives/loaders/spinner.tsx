import { type RecipeVariantProps, cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import * as React from 'react'

type SpinnerProps = {
  size?: string
} & SpinnerVariants

const spinnerStyles = cva({
  base: {
    pos: 'relative',

    '& div': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      rounded: 'full',
      animation: 'loader'
    },
    '& div:nth-child(1)': {
      animationDelay: '-0.45s'
    },
    '& div:nth-child(2)': {
      animationDelay: '-0.3s'
    },
    '& div:nth-child(3)': {
      animationDelay: '-1.5s'
    }
  },
  variants: {
    look: {
      form: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      },
      ghost: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      },
      transparent: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      },
      purple: {
        '& div': {
          border: '1.6px solid token(colors.gray.1)',
          borderColor: 'token(colors.gray.1) transparent transparent transparent'
        }
      },
      purpleOutline: {
        '& div': {
          border: '1.6px solid token(colors.sPrimaryAlpha.7)',
          borderColor: 'token(colors.sPrimaryAlpha.7) transparent transparent transparent'
        }
      },
      purpleTransparent: {
        '& div': {
          border: '1.6px solid token(colors.sPrimaryAlpha.7)',
          borderColor: 'token(colors.sPrimaryAlpha.7) transparent transparent transparent'
        }
      },
      gray: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      },
      grayOutline: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      },
      danger: {
        '& div': {
          border: '1.6px solid token(colors.gray.1)',
          borderColor: 'token(colors.gray.1) transparent transparent transparent'
        }
      },
      dangerOutline: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      },
      dangerTransparent: {
        '& div': {
          border: '1.6px solid token(colors.sGrayAlpha.12)',
          borderColor: 'token(colors.sGrayAlpha.12) transparent transparent transparent'
        }
      }
    },
    size: {
      md: {
        w: '2rem',
        h: '2rem'
      },
      sm: {
        w: '1.6rem',
        h: '1.6rem'
      },
      xs: {
        w: '1.4rem',
        h: '1.4rem'
      },
      attribute: {},
      auto: {}
    }
  },
  defaultVariants: {
    look: 'grayOutline',
    size: 'sm'
  }
})

const StyledSpinner = styled('div', spinnerStyles)

export type SpinnerVariants = RecipeVariantProps<typeof spinnerStyles>

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
  { look, size },
  ref
) {
  return (
    <StyledSpinner size={size} look={look} className="spinner" ref={ref}>
      <div />
      <div />
      <div />
      <div />
    </StyledSpinner>
  )
})
