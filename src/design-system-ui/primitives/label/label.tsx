'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'



const StyledLabel = styled(LabelPrimitive.Root)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & JsxStyleProps
>(function Label({ className, ...props }, ref) {
  return (
    <StyledLabel textStyle="label" display="block" ref={ref} className={className} {...props} />
  )
})

export { Label }
