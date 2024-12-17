'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'



const StyledEmpty = styled(CommandPrimitive.Empty)

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & JsxStyleProps
>(function CommandEmpty(props, ref) {
  return <StyledEmpty ref={ref} {...props} />
})
