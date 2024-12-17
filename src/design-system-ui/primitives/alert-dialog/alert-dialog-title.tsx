'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'



const StyledTitle = styled(AlertDialogPrimitive.Title)

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> & JsxStyleProps
>(function AlertDialogTitle({ ...props }, ref) {
  return <StyledTitle ref={ref} fontSize="3" fontWeight="500" {...props} />
})
