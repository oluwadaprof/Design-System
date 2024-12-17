'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'



const radioGroupItemStyles = cva({
  base: {
    cursor: 'pointer',
    rounded: 'full',
    border: '2px solid token(colors.sGrayAlpha.3)',
    pos: 'relative',

    _focus: {
      border: '2px solid token(colors.sPrimaryAlpha.9)'
    },

    '&[data-state=checked]': {
      border: '2px solid token(colors.sPrimaryAlpha.9)',

      _after: {
        content: '""',
        pos: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bg: 'sPrimaryAlpha.9',
        rounded: 'full',
        w: '60%',
        h: '60%'
      }
    }
  },
  variants: {
    look: {
      ghost: {
        '&[data-state=checked]': {
          border: 'unset',
          _after: {
            bg: 'none'
          }
        }
      }
    },
    size: {
      md: {
        w: '1.8rem',
        h: '1.8rem'
      },
      sm: {
        w: '1.4rem',
        h: '1.4rem'
      }
    }
  }
})

const StyledGroupItem = styled(RadioGroupPrimitive.Item, radioGroupItemStyles)

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    JsxStyleProps &
    RecipeVariantProps<typeof radioGroupItemStyles>
>(function RadioGroupItem({ children, ...props }, ref) {
  return (
    <StyledGroupItem ref={ref} {...props}>
      {children}
    </StyledGroupItem>
  )
})
