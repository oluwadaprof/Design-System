'use client'

import { cx } from '@design-system-ui/styled-system/css'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'



export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(function CommandSeparator({ className, ...props }, ref) {
  return <CommandPrimitive.Separator ref={ref} className={cx(className)} {...props} />
})
