'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'



const accordionHeaderStyle = cva({
  base: {
    w: '100%',
    display: 'flex'
  }
})

const StyledAccordionHeader = styled(AccordionPrimitive.Header, accordionHeaderStyle)

const accordionTriggerStyle = cva({
  base: {
    display: 'flex',
    flex: '1',
    gap: '1rem',
    alignItems: 'center',

    fontWeight: '500',
    transition: 'all',
    cursor: 'pointer',

    '&[data-state=closed]': {
      '& .caret': {
        transform: 'rotate(-90deg)'
      }
    }
  },
  variants: {
    look: {
      transparent: {
        bg: 'transparent',

        _hover: {
          bg: 'sMutedBackground'
        }
      },
      grey: {
        bg: 'sMutedBackground',

        _hover: {
          _disabled: {
            bg: 'sMutedBackground'
          }
        }
      }
    }
  }
})

const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger, accordionTriggerStyle)

type ButtonVariants = RecipeVariantProps<typeof accordionTriggerStyle>

type Props = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
  JsxStyleProps &
  ButtonVariants & { showCaret?: boolean }

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  Props
>(function AccordionTrigger({ children, ...props }, ref) {
  return (
    <StyledAccordionHeader>
      <StyledAccordionTrigger ref={ref} {...props}>
        {children}
      </StyledAccordionTrigger>
    </StyledAccordionHeader>
  )
})
