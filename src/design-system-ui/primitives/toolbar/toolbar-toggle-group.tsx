'use client'

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import React from 'react'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

type Element = React.ElementRef<typeof ToolbarPrimitive.ToggleGroup>

type Props = React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup> & JsxStyleProps

const groupStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '1'
  }
})

const StyledGroup = styled(ToolbarPrimitive.ToggleGroup, groupStyles)

export const ToolbarToggleGroup = React.forwardRef<Element, Props>(function ToolbarToggleGroup(
  { ...props },
  ref
) {
  return <StyledGroup ref={ref} {...props} />
})
