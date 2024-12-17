'use client'

import * as React from 'react'



import { Box } from '../layout'
import { Icons } from './icons'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

export const IconPicker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    trigger: React.ReactNode
    onIconSelect: (icon: any) => void
  }
>(function IconPicker({ onIconSelect, trigger, ...props }, ref) {
  const [open, onOpenChange] = React.useState(false)

  const onIconClick = (icon: any) => {
    onOpenChange(false)
    onIconSelect(icon)
  }

  return (
    <Box ref={ref} {...props}>
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent w="32rem" mx="2.5">
          <Icons onIconClick={onIconClick} />
        </PopoverContent>
      </Popover>
    </Box>
  )
})
