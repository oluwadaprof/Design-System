'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

export type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
  JsxStyleProps

const tooltipContentStyles = cva({
  base: {
    bgColor: 'white',
    color: 'sAppText.1',
    border: 'subtle',
    fontWeight: '500',
    fontSize: '1',
    whiteSpace: 'normal',
    rounded: 'xl',
    px: '1.5',
    py: '1',
    zIndex: 52,
    shadow: 'sMd',

    _dark: {
      bgColor: 'midnight'
    }
  }
})

const StyledContent = styled(TooltipPrimitive.Content, tooltipContentStyles)

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(function TooltipContent({ sideOffset = 4, ...props }, ref) {
  return <StyledContent ref={ref} sideOffset={sideOffset} {...props} />
})
