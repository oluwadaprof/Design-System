'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



const separatorStyles = cva({
  base: { my: '4px', h: '1px', bg: 'sMutedBackground' }
})

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, separatorStyles)

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & JsxStyleProps
>(function DropdownMenuSeparator({ ...props }, ref) {
  return <StyledSeparator ref={ref} {...props} />
})
