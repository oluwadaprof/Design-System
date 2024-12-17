'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'



const StyledGroup = styled(RadioGroupPrimitive.Root)

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & JsxStyleProps
>(function RadioGroup({ ...props }, ref) {
  return <StyledGroup {...props} ref={ref} />
})
