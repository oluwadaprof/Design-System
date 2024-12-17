'use client'

import * as React from 'react'



import { Box } from '../layout'
import { FormItemContext } from './form-item-context'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & JsxStyleProps
>(function FormItem({ ...props }, ref) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <Box w="full" ref={ref} {...props} />
    </FormItemContext.Provider>
  )
})
