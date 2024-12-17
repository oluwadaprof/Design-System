'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import * as React from 'react'



const contentStyles = cva({
  base: {
    zIndex: 50,
    rounded: 'xl',
    border: 'subtle',
    bg: 'sAppPanelBackground',
    glass: 'popup',

    '&[data-state=open]': {
      animation: 'popoverUpIn'
    },

    '&[data-state=closed]': {
      animation: 'popoverHide'
    }
  }
})

const StyledHoverContent = styled(HoverCardPrimitive.Content, contentStyles)

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & JsxStyleProps
>(function HoverCardContent({ align = 'center', sideOffset = 4, ...props }, ref) {
  return <StyledHoverContent ref={ref} align={align} sideOffset={sideOffset} {...props} />
})
