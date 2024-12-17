'use client'

import { cva, cx, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as React from 'react'



const toggleStyle = cva({
  base: {
    bg: 'transparent',
    borderRadius: 'xl',
    fontWeight: '500',
    outline: 'none',

    cursor: 'pointer'
  },
  variants: {
    look: {
      ghost: {},
      transparent: {
        border: 'subtle',

        _hover: {
          bg: 'sMutedBackground'
        },

        '&[data-state=on]': {
          border: 'subtle'
        }
      },
      outline: {
        border: 'subtle',

        _hover: {
          bg: 'sMutedBackground'
        },

        '&[data-state=on]': {
          border: 'focused'
        }
      },
      solid: {
        bg: 'white',

        _hover: {
          bg: 'sMutedBackground'
        },

        '&[data-state=on]': {
          bg: 'sPrimaryAlpha.9'
        }
      }
    },
    size: {
      md: {
        fontSize: '2',
        px: '1.5rem',
        h: '4rem'
      },
      sm: {
        fontSize: '1',
        px: '1rem',
        h: '3rem'
      }
    }
  },
  defaultVariants: {
    look: 'outline',
    size: 'sm'
  }
})

type ToggleVariants = RecipeVariantProps<typeof toggleStyle>

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & ToggleVariants
>(function Textarea({ className, size, look, ...props }, ref) {
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cx(toggleStyle({ size, look }), className)}
      {...props}
    />
  )
})

export { Toggle }
