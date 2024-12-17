'use client'

import { Icons } from '@design-system-ui/icons/base'
import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



const triggerStyles = cva({
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
      opacity: 0.5
    },

    '&[data-state=open]': {
      bg: 'sMutedBackground'
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

type Element = React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>

type Props = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
} & JsxStyleProps &
  RecipeVariantProps<typeof triggerStyles>

const StyledTrigger = styled(DropdownMenuPrimitive.SubTrigger, triggerStyles)

export const DropdownMenuSubTrigger = React.forwardRef<Element, Props>(
  function DropdownMenuSubTrigger({ inset, children, ...props }, ref) {
    return (
      <StyledTrigger ref={ref} style={{ paddingLeft: inset ? '3.2rem' : undefined }} {...props}>
        <>
          {children}
          <Icons.caretRight size={12} color="sAppMutedText" ml="auto" />
        </>
      </StyledTrigger>
    )
  }
)
