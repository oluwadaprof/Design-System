'use client'

import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'



const progressRootStyles = cva({
  base: {
    pos: 'relative',
    h: '4',
    w: 'full',
    overflow: 'hidden',
    rounded: 'full',
    bg: 'sMutedBackground'
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
        h: '0.4rem',
        w: 'full'
      },
      xs: {
        h: '0.8rem',
        w: 'full'
      },
      sm: {
        h: '1.2rem',
        w: 'full'
      },
      md: {
        h: '1.6rem',
        w: 'full'
      },
      lg: {
        h: '2rem',
        w: 'full'
      }
    }
  },
  defaultVariants: {
    size: 'xs'
  }
})

const StyledProgressRoot = styled(ProgressPrimitive.Root, progressRootStyles)
const StyledProgressIndicator = styled(ProgressPrimitive.Indicator)

type TriggerVariants = RecipeVariantProps<typeof progressRootStyles>
type Element = React.ElementRef<typeof ProgressPrimitive.Root>
type Props = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
  JsxStyleProps &
  TriggerVariants

export const Progress = React.forwardRef<Element, Props>(function Progress(
  { value, ...props },
  ref
) {
  return (
    <StyledProgressRoot ref={ref} {...props}>
      <StyledProgressIndicator
        h="full"
        w="full"
        flex="1"
        bg="sPrimaryAlpha.9"
        transition="all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </StyledProgressRoot>
  )
})
