'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'



const rangeStyles = cva({
  base: {
    position: 'absolute',
    backgroundColor: 'sPrimaryAlpha.9',
    borderRadius: 'full',
    height: '100%'
  },
  variants: {
    look: {
      purple: {
        bg: 'sPrimaryAlpha.9'
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
        h: '0.4rem'
      },
      xs: {
        h: '0.8rem'
      },
      sm: {
        h: '1.2rem'
      },
      md: {
        h: '1.6rem'
      },
      lg: {
        h: '2rem'
      }
    }
  },
  defaultVariants: {
    size: 'xs'
  }
})

const StyledRange = styled(SliderPrimitive.Range, rangeStyles)

type RangeVariants = RecipeVariantProps<typeof rangeStyles>
type Element = React.ElementRef<typeof SliderPrimitive.Range>
export type SliderRangeProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> &
  JsxStyleProps &
  RangeVariants

export const SliderRange = React.forwardRef<Element, SliderRangeProps>(function SliderRange(
  props,
  ref
) {
  return <StyledRange ref={ref} {...props} />
})
