'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'



const commandListStyles = cva({
  base: {
    minH: '10rem',
    // maxH: '30rem',
    h: 'var(--cmdk-list-height)',
    transition: 'height 200ms ease',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollPaddingBlockStart: '8px',
    scrollPaddingBlockEnd: '8px'
  }
})

const StyledList = styled(CommandPrimitive.List, commandListStyles)

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & JsxStyleProps
>(function CommandList({ ...props }, ref) {
  return <StyledList ref={ref} {...props} />
})
