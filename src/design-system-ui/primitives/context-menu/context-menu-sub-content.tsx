'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'


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

const StyledSubContent = styled(ContextMenuPrimitive.SubContent, contentStyles)

export const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(function ContextMenuSubContent({ ...props }, ref) {
  return <StyledSubContent ref={ref} {...props} />
})
