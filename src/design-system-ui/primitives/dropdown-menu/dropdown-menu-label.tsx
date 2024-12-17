'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



type Element = React.ElementRef<typeof DropdownMenuPrimitive.Label>

type Props = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
} & JsxStyleProps

const styles = cva({
  base: { my: '1', textStyle: 'label' }
})

const StyledLabel = styled(DropdownMenuPrimitive.Label, styles)

export const DropdownMenuLabel = React.forwardRef<Element, Props>(function DropdownMenuLabel(
  { className, ...props },
  ref
) {
  return <StyledLabel ref={ref} className={className} {...props} />
})
