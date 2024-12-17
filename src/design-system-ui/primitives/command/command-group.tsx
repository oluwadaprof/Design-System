'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'



const commandGroupStyles = cva({
  base: {
    overflowX: 'hidden',
    p: '1',

    '& [cmdk-group-heading]': {
      fontSize: '1',
      color: 'sAppMutedText',
      px: '1.5',
      mb: '2'
    }
  }
})

const StyledGroup = styled(CommandPrimitive.Group, commandGroupStyles)

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & JsxStyleProps
>(function CommandGroup({ ...props }, ref) {
  return <StyledGroup ref={ref} {...props} />
})
