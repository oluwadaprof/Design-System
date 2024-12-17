'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'



const commandItemStyles = cva({
  base: {
    pos: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',

    _disabled: {
      pointerEvents: 'none',
      opacity: '0.5',
      cursor: 'not-allowed'
    },

    '&[data-selected]': {
      bg: 'sMutedBackground'
    }
  },
  variants: {
    size: {
      md: {
        fontSize: '2',
        px: '3.2',
        h: '3.8rem',
        rounded: 'xl'
      },
      sm: {
        fontSize: '2',
        px: '1.5',
        h: '3.4rem',
        rounded: 'lg'
      },
      xs: {
        fontSize: '1',
        px: '1.5',
        h: '2.8rem',
        rounded: 'lg'
      },
      auto: {}
    }
  }
})

const StyledItem = styled(CommandPrimitive.Item, commandItemStyles)

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> &
    JsxStyleProps &
    RecipeVariantProps<typeof commandItemStyles>
>(function CommandItem({ ...props }, ref) {
  return <StyledItem ref={ref} {...props} />
})
