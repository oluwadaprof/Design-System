'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'



// Styles for the slider root
const rootStyles = cva({
  base: {
    pos: 'relative',
    h: '6',
    w: 'full',
    display: 'flex',
    rounded: 'full',
    alignItems: 'center',
    bg: 'sMutedBackground'
  },
  variants: {
    look: {
      gray: {
        bg: 'gray.2'
      },
      grayOutline: {
        bg: 'gray.2',
        border: 'subtle'
      }
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

const StyledRoot = styled(SliderPrimitive.Root, rootStyles)
type RootVariants = RecipeVariantProps<typeof rootStyles>
type Element = React.ElementRef<typeof SliderPrimitive.Thumb>
export type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
  JsxStyleProps &
  RootVariants

// Your main Slider component
export const Slider = React.forwardRef<Element, SliderProps>(function SliderRoot(props, ref) {
  return <StyledRoot ref={ref} {...props} />
})
