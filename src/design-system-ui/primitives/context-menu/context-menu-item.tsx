'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'



const itemStyles = cva({
  base: {
    pos: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    rounded: '8px',
    py: '1',
    px: '1',
    gap: '2.5',
    fontSize: '1',
    outline: 'none',
    transition: 'colors 200ms',

    _focus: {
      bg: 'sMutedBackground'
    },

    _disabled: {
      pointerEvents: 'none',
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&[data-highlighted]': {
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
  },
  defaultVariants: {
    size: 'xs'
  }
})

const StyledDropdownItem = styled(ContextMenuPrimitive.Item, itemStyles)

type Props = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  disablePropagation?: boolean
} & JsxStyleProps &
  RecipeVariantProps<typeof itemStyles>

type Element = React.ElementRef<typeof ContextMenuPrimitive.Item>

export const ContextMenuItem = React.forwardRef<Element, Props>(function ContextMenuItem(
  { inset, ...props },
  ref
) {
  return (
    <StyledDropdownItem
      ref={ref}
      style={{ paddingLeft: inset ? '1.6rem' : undefined }}
      {...props}
    />
  )
})
