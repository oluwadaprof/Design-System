'use client'

import { cx } from '@design-system-ui/styled-system/css'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(function SheetTitle({ className, ...props }, ref) {
  return <SheetPrimitive.Title ref={ref} className={cx(className)} {...props} />
})
