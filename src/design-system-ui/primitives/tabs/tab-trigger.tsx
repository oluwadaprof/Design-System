'use client'

import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

// import { RecipeVariantProps, cva } from '@pulse-ui/styled-system/css'


const StyledTabTrigger = styled(TabsPrimitive.Trigger)

// type TriggerVariants = RecipeVariantProps<typeof tabTriggerStyles>

export const TabTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & JsxStyleProps // </typeof>& TriggerVariants
>(function TabTrigger({ ...props }, ref) {
  return <StyledTabTrigger ref={ref} {...props} />
})
