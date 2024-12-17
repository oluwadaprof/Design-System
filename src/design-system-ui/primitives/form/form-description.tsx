'use client'

import * as React from 'react'



import { Text } from '../text'
import { useFormField } from './use-form-field'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & JsxStyleProps
>(function FormDescription({ ...props }, ref) {
  const { formDescriptionId } = useFormField()

  return <Text ref={ref} id={formDescriptionId} {...props} />
})
