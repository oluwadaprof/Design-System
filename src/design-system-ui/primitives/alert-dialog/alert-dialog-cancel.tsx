'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'


const StyledCancel = styled(AlertDialogPrimitive.Cancel)

export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & JsxStyleProps
>(function AlertDialogCancel({ ...props }, ref) {
  return <StyledCancel ref={ref} {...props} />
})
