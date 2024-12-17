'use client'

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import React from 'react'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

import { ButtonVariants, buttonStyle } from '../button'

type Element = React.ElementRef<typeof ToolbarPrimitive.ToggleItem>

type Props = React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> &
  JsxStyleProps &
  ButtonVariants

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, buttonStyle)

export const ToolbarToggleItem = React.forwardRef<Element, Props>(function ToolbarToggleItem(
  { ...props },
  ref
) {
  return <StyledToggleItem ref={ref} {...props} />
})
