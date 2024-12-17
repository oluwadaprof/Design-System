'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'



const trackStyles = cva({
  base: {
    backgroundColor: 'sAppMutedBackground',
    position: 'relative',
    flexGrow: 1,
    borderRadius: 'full',
    height: '2'
  },
  variants: {
    look: {
      gray: {
        bg: 'gray.2'
      },
      grayOutline: {
        bg: 'gray.2',
        border: 'subtle'
      },
      success: {
        bg: 'sSuccessAlpha.9'
      },
      successOutline: {
        bg: 'sSuccessAlpha.9',
        border: 'success'
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
  }
})

const StyledTrack = styled(SliderPrimitive.Track, trackStyles)

type RootVariants = RecipeVariantProps<typeof trackStyles>
type Element = React.ElementRef<typeof SliderPrimitive.Track>
export type SliderTrackProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> &
  JsxStyleProps &
  RootVariants

export const SliderTrack = React.forwardRef<Element, SliderTrackProps>(function SliderTrack(
  props,
  ref
) {
  return <StyledTrack ref={ref} {...props} />
})
