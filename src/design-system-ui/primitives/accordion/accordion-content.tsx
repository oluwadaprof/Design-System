'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'
import { AnimateChangeInHeight } from '../animated-height'
import { FadeIn } from '../framer'




type ElementRef = React.ElementRef<typeof AccordionPrimitive.Content>

type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & JsxStyleProps

const accordionContentStyle = cva({
  base: {
    overflow: 'hidden',
    fontSize: '1',
    // NOTE: using transition all and animating the height made the slide up and down a bit janky so I ported the accordion to use scaleY instead
    // transition: 'all',
    transition: 'transform',

    '&[data-state=closed]': {
      // animation: 'accordionUp'
      transform: 'scaleY(0)'
    },

    '&[data-state=open]': {
      // animation: 'accordionDown'
      transform: 'scaleY(1)'
    }
  }
})

const StyledAccordionContent = styled(AccordionPrimitive.Content, accordionContentStyle)

export const AccordionContent = React.forwardRef<ElementRef, Props>(function AccordionContent(
  { children, ...props },
  ref
) {
  return (
    <AnimateChangeInHeight>
      <StyledAccordionContent ref={ref} {...props}>
        <FadeIn
          transition={{
            delay: 0.2,
            duration: 0.2
          }}
        >
          {children}
        </FadeIn>
      </StyledAccordionContent>
    </AnimateChangeInHeight>
  )
})
