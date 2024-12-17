'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'



const thumbStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '4',
    height: '4',
    // bg: 'sSuccessAlpha.9',
    _dark: {
      bg: 'white'
    },
    borderRadius: 'full'
  },
  variants: {
    look: {
      purple: {
        bg: 'sPrimaryAlpha.9'
      },
      purpleOutline: {
        bg: 'white',
        border: 'focused'
      },
      error: {
        bg: 'sErrorAlpha.9'
      },
      success: {
        bg: 'sSuccessAlpha.9'
      },
      usage: {}
    },
    size: {
      xxs: {
        h: '0.4rem',
        w: '0.4rem'
      },
      xs: {
        h: '0.8rem',
        w: '0.8rem'
      },
      sm: {
        h: '1.2rem',
        w: '1.2rem'
      },
      md: {
        h: '1.6rem',
        w: '1.6rem'
      },
      lg: {
        h: '2rem',
        w: '2rem'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const StyledThumb = styled(SliderPrimitive.Thumb, thumbStyles)
type ThumbVariants = RecipeVariantProps<typeof thumbStyles>
type Element = React.ElementRef<typeof SliderPrimitive.Thumb>
export type SliderThumbProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> &
  JsxStyleProps &
  ThumbVariants

export const SliderThumb = React.forwardRef<Element, SliderThumbProps>(function SliderThumb(
  { children, ...props },
  ref
) {
  return (
    <StyledThumb ref={ref} {...props}>
      {children}
    </StyledThumb>
  )
})
