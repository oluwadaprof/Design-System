'use client'

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import React from 'react'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

const StyledToolbar = styled(ToolbarPrimitive.Root)

export const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> & JsxStyleProps
>(function Toolbar({ ...props }, ref) {
  return <StyledToolbar ref={ref} display="flex" alignItems="center" rounded="lg" {...props} />
})
