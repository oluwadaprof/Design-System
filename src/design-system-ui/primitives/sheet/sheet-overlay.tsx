'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



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

const StyledOverlay = styled(SheetPrimitive.Overlay, overlayStyles)

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(function SheetOverlay({ ...props }, ref) {
  return <StyledOverlay {...props} ref={ref} />
})
