'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(function AccordionItem({ ...props }, ref) {
  return <AccordionPrimitive.Item ref={ref} {...props} />
})
