'use client'

import * as React from 'react'

import { Text } from '../text'
import { useFormField } from './use-form-field'

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function FormMessage({ className, children, ...props }, ref) {
  const { name, error, formMessageId } = useFormField()
  let body = children

  if (error) {
    // @ts-expect-error - name index is dynamic
    body = error[name]?.message || error.message
  }

  if (!body) {
    return null
  }

  return (
    <Text
      textStyle="label"
      color="sErrorAlpha.11"
      mt="1"
      ref={ref}
      id={formMessageId}
      className={className}
      {...props}
    >
      {body}
    </Text>
  )
})
