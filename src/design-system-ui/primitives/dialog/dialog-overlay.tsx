'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



type Element = React.ElementRef<typeof DialogPrimitive.Overlay>

type Props = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

const overlayStyles = cva({
  base: {
    pos: 'fixed',
    inset: '0',
    zIndex: '50',
    backdropFilter: 'blur(1px)',
    bg: 'rgba(255, 255, 255, 0.2)',

    _dark: {
      bg: 'rgba(9, 7, 17, 0.2)'
    }
  }
})

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles)

export const DialogOverlay = React.forwardRef<Element, Props>(function DialogOverlay(
  { ...props },
  ref
) {
  return <StyledOverlay ref={ref} {...props} />
})
