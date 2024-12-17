'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



type Element = React.ElementRef<typeof DropdownMenuPrimitive.Content>

type Props = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
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
    shadow: 'sSm',

    '&[data-state=open]': {
      animation: 'popoverUpIn'
    },

    '&[data-state=closed]': {
      animation: 'popoverHide'
    }
  }
})

const StyledContent = styled(DropdownMenuPrimitive.Content, contentStyles)

export const DropdownMenuContent = React.forwardRef<Element, Props>(function DropdownMenuContent(
  { sideOffset = 4, alignOffset = -10, ...props },
  ref
) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent ref={ref} sideOffset={sideOffset} alignOffset={alignOffset} {...props} />
    </DropdownMenuPrimitive.Portal>
  )
})
