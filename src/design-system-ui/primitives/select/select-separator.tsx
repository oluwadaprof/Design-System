'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'


const StyledSeparator = styled(SelectPrimitive.Separator)

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(function SelectSeparator({ ...props }, ref) {
  return <StyledSeparator mx="4px" my="4px" h="1px" ref={ref} {...props} />
})
