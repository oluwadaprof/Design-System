'use client'

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import React from 'react'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

type Element = React.ElementRef<typeof ToolbarPrimitive.Separator>

type Props = React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator> & JsxStyleProps

const separatorStyles = cva({
  base: {
    w: '1px',
    minH: '2rem',
    bg: 'sMutedBackground'
  }
})

const StyledSeparator = styled(ToolbarPrimitive.Separator, separatorStyles)

export const ToolbarSeparator = React.forwardRef<Element, Props>(function ToolbarSeparator(
  { ...props },
  ref
) {
  return <StyledSeparator ref={ref} {...props} />
})
