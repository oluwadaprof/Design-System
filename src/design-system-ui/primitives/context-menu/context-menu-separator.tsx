'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'



const separatorStyles = cva({
  base: { my: '4px', h: '1px', bg: 'sMutedBackground' }
})

const StyledSeparator = styled(ContextMenuPrimitive.Separator, separatorStyles)

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(function ContextMenuSeparator({ ...props }, ref) {
  return <StyledSeparator ref={ref} {...props} />
})
