'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import * as React from 'react'



const rootStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: '0',
    cursor: 'pointer',
    rounded: '99999px',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
    border: 'subtle',

    _focusVisible: {
      border: 'focused'
    },

    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed'
    },

    '&[data-state=checked]': {
      bg: 'sPrimaryAlpha.9'
    },

    '&[data-state=unchecked]': {
      bg: 'sMutedBackground'
    }
  },
  variants: {
    size: {
      md: {
        w: '3.4rem',
        h: '2rem'
      },
      sm: {
        w: '3rem',
        h: '1.6rem'
      },
      xs: {
        w: '1.8rem',
        h: '1rem'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const thumbStyles = cva({
  base: {
    pointerEvents: 'none',
    display: 'block',
    bg: 'white',
    rounded: '50%',
    transitionProperty: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms'
  },
  variants: {
    size: {
      md: {
        h: '1.6rem',
        w: '1.6rem',

        '&[data-state=checked]': {
          transform: 'translateX(1.6rem)'
        },

        '&[data-state=unchecked]': {
          transform: 'translateX(0)'
        }
      },
      sm: {
        w: '1.4rem',
        h: '1.4rem',

        '&[data-state=checked]': {
          transform: 'translateX(1.4rem)'
        },

        '&[data-state=unchecked]': {
          transform: 'translateX(0)'
        }
      },
      xs: {
        w: '0.8rem',
        h: '0.8rem',

        '&[data-state=checked]': {
          transform: 'translateX(0.8rem)'
        },

        '&[data-state=unchecked]': {
          transform: 'translateX(0)'
        }
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const SwitchRoot = styled(SwitchPrimitives.Root, rootStyles)

const SwitchThumb = styled(SwitchPrimitives.Thumb, thumbStyles)

type SwitchVariants = RecipeVariantProps<typeof rootStyles>

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & JsxStyleProps & SwitchVariants
>(function Switch({ size, ...props }, ref) {
  return (
    <SwitchRoot size={size} {...props} ref={ref}>
      <SwitchThumb size={size} />
    </SwitchRoot>
  )
})
