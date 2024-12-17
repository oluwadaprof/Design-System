'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



type Element = React.ElementRef<typeof DropdownMenuPrimitive.SubContent>

type Props = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & {
  inset?: boolean
} & JsxStyleProps

const contentStyles = cva({
  base: {
    zIndex: '50',
    minW: '8rem',
    overflow: 'hidden',
    rounded: 'xl',
    border: 'subtle',
    mx: '1rem',
    bg: 'sAppPanelBackground',
    glass: 'popup',
    my: '0',
    mt: '-0.5rem',

    '&[data-state=open]': {
      animation: 'popoverUpIn'
    },

    '&[data-state=closed]': {
      animation: 'popoverHide'
    }
  }
})

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, contentStyles)

export const DropdownMenuSubContent = React.forwardRef<Element, Props>(
  function DropdownMenuSubContent({ ...props }, ref) {
    return <StyledSubContent ref={ref} {...props} />
  }
)
