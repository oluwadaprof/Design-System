'use client'

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import React from 'react'



import { ButtonVariants, buttonStyle } from '../button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { styled } from '@design-system-ui/styled-system/jsx'

type Element = React.ElementRef<typeof ToolbarPrimitive.Button>

type Props = React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> &
  JsxStyleProps &
  ButtonVariants & {
    tooltipChildren?: React.ReactNode
  }

const StyledToolbarButton = styled(ToolbarPrimitive.Button, buttonStyle)

export const ToolbarButton = React.forwardRef<Element, Props>(function ToolbarButton(
  { tooltipChildren, ...props },
  ref
) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <StyledToolbarButton ref={ref} {...props} />
      </TooltipTrigger>
      {tooltipChildren && <TooltipContent>{tooltipChildren}</TooltipContent>}
    </Tooltip>
  )
})
