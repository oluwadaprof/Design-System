'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'
import { AnimateChangeInHeight } from '../animated-height'


export const popoverContentStyles = cva({
  base: {
    zIndex: '50',
    rounded: 'xl',
    border: 'subtle',
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

const StyledPopoverContent = styled(PopoverPrimitive.Content, popoverContentStyles)

export type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
  JsxStyleProps

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(function PopoverContent({ align = 'center', sideOffset = 4, children, ...props }, ref) {
  return (
    <PopoverPrimitive.Portal>
      <StyledPopoverContent ref={ref} align={align} sideOffset={sideOffset} {...props}>
        <AnimateChangeInHeight>{children}</AnimateChangeInHeight>
      </StyledPopoverContent>
    </PopoverPrimitive.Portal>
  )
})
