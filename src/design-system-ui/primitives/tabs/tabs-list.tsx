'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'



const tabListStyles = cva({
  base: {
    display: 'flex'
  }
})

const StyledTabList = styled(TabsPrimitive.List, tabListStyles)

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & JsxStyleProps
>(function TabsList({ ...props }, ref) {
  return <StyledTabList ref={ref} {...props} />
})
