'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'



type Element = React.ElementRef<typeof ContextMenuPrimitive.Content>

type Props = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & {
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

    '&[data-state=open]': {
      animation: 'popoverUpIn'
    },

    '&[data-state=closed]': {
      animation: 'popoverHide'
    }
  }
})

const StyledContent = styled(ContextMenuPrimitive.Content, contentStyles)

export const ContextMenuContent = React.forwardRef<Element, Props>(function ContextMenuContent(
  { ...props },
  ref
) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent ref={ref} {...props} />
    </ContextMenuPrimitive.Portal>
  )
})
