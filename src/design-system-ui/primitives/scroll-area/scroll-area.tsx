'use client'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'



import { ScrollBar } from './scroll-bar'
import { styled } from '@design-system-ui/styled-system/jsx'
import type { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { css } from '@design-system-ui/styled-system/css'

const StyledScollAreaRoot = styled(ScrollAreaPrimitive.Root)

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> &
    JsxStyleProps & {
      padScrollbar?: boolean
      hideBar?: boolean
      scrollbarClassname?: string
      orientation?: 'vertical' | 'horizontal'
    }
>(function ScrollArea(
  { children, scrollbarClassname, padScrollbar = true, orientation, ...props },
  ref
) {
  return (
    <StyledScollAreaRoot ref={ref} pos="relative" {...props}>
      <ScrollAreaPrimitive.Viewport
        className={css({
          // h: '100%',
          w: padScrollbar ? 'calc(100% - 1rem) !important' : '100% !important',
          rounded: 'inherit',

          '& > div': {
            display: 'block !important'
          }
        })}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={orientation} className={scrollbarClassname} />
      <ScrollAreaPrimitive.Corner />
    </StyledScollAreaRoot>
  )
})
