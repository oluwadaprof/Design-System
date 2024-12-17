'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'



const StyledOverlay = styled(AlertDialogPrimitive.Overlay)

export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(function AlertDialogOverlay({ ...props }, ref) {
  return (
    <StyledOverlay
      position="fixed"
      inset="0"
      zIndex="50"
      backdropFilter="blur(2px)"
      {...props}
      ref={ref}
    />
  )
})
