'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'



import { Label } from '../label'
import { useFormField } from './use-form-field'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & JsxStyleProps
>(function FormLabel({ className, ...props }, ref) {
  const { formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      textStyle="label"
      color="sFormLabel"
      mb="1"
      className={className}
      htmlFor={formItemId}
      {...props}
    />
  )
})
