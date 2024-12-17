'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



const StyledDescription = styled(SheetPrimitive.Description)

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(function SheetDescription({ ...props }, ref) {
  return (
    <StyledDescription fontSize="1" fontWeight="500" color="sAppMutedText" ref={ref} {...props} />
  )
})
