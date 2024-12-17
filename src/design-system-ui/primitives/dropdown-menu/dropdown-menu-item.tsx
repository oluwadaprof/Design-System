'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



type Element = React.ElementRef<typeof DropdownMenuPrimitive.Item>

const itemStyles = cva({
  base: {
    pos: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
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

const StyledDropdownItem = styled(DropdownMenuPrimitive.Item, itemStyles)

type Props = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  disablePropagation?: boolean
} & JsxStyleProps &
  RecipeVariantProps<typeof itemStyles>

export const DropdownMenuItem = React.forwardRef<Element, Props>(function DropdownMenuItem(
  { inset, disablePropagation, ...props },
  ref
) {
  return (
    <StyledDropdownItem
      ref={ref}
      style={{ paddingLeft: inset ? '1.6rem' : undefined }}
      onClick={(event) => disablePropagation && event.stopPropagation()}
      {...props}
    />
  )
})
