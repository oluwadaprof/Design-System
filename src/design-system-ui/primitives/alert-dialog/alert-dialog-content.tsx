'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'


import { AlertDialogOverlay } from './alert-dialog-overlay'
import { AlertDialogPortal } from './alert-dialog-portal'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { styled } from '@design-system-ui/styled-system/jsx'

const StyledContent = styled(AlertDialogPrimitive.Content)

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & JsxStyleProps
>(function AlertDialogContent({ ...props }, ref) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <StyledContent
        ref={ref}
        position="fixed"
        left="50%"
        top="50%"
        zIndex="50"
        transform="translate(-50%, -50%)"
        border="subtle"
        // bg="sAppPanelBackground"
        bg="sAppBackground"
        glass="popup"
        rounded="xl"
        css={{
          '&[data-state=open]': {
            animation: 'fadeElementIn'
          },
          '&[data-state=closed]': {
            animation: 'fadeElementOut'
          }
        }}
        {...props}
      />
    </AlertDialogPortal>
  )
})
