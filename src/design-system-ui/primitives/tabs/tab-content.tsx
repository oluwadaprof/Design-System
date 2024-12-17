'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'



const tabContentStyles = cva({
  base: {
    _focusVisible: {
      outline: 'none'
    }
  }
})

const StyledTabContent = styled(TabsPrimitive.Content, tabContentStyles)

export const TabContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & JsxStyleProps
>(function TabContent({ ...props }, ref) {
  return <StyledTabContent ref={ref} {...props} />
})
