'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'



const StyledDescription = styled(AlertDialogPrimitive.Description)

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> & JsxStyleProps
>(function AlertDialogDescription({ ...props }, ref) {
  return <StyledDescription ref={ref} color="sAppMutedText" {...props} />
})
