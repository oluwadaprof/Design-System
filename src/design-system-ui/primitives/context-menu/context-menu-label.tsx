'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'



type Element = React.ElementRef<typeof ContextMenuPrimitive.Label>

type Props = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
} & JsxStyleProps

const styles = cva({
  base: { my: '4px' }
})

const StyledLabel = styled(ContextMenuPrimitive.Label, styles)

export const ContextMenuLabel = React.forwardRef<Element, Props>(function ContextMenuLabel(
  { ...props },
  ref
) {
  return <StyledLabel ref={ref} {...props} />
})
