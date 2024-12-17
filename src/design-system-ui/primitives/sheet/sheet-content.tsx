'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



import { SheetOverlay } from './sheet-overlay'
import { SheetPortal } from './sheet-portal'
import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { styled } from '@design-system-ui/styled-system/jsx'

const sheetStyles = cva({
  base: {
    pos: 'fixed',
    zIndex: '50',
    border: 'subtle',
    bg: 'sAppPanelBackground',
    glass: 'popup',
    rounded: 'xl',
    w: '100%',
    m: '1rem',

    '&[data-state=open]': {
      animation: 'fadeElementIn'
    },
    '&[data-state=closed]': {
      animation: 'fadeElementOut'
    }
  },
  variants: {
    side: {
      top: {
        top: '0'
      },
      bottom: {
        bottom: '0'
      },
      left: {
        top: '0',
        left: '0',
        w: '1/4',
        h: 'calc(100vh - 2rem)'
      },
      right: {
        top: '0',
        right: '0',
        h: 'calc(100vh - 2rem)'
      }
    }
  },
  defaultVariants: {
    side: 'right'
  }
})

type SheetVariants = RecipeVariantProps<typeof sheetStyles>

type SheetContentProps = SheetVariants &
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> &
  JsxStyleProps

const StyledSheetContent = styled(SheetPrimitive.Content, sheetStyles)

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(function SheetContent({ children, ...props }, ref) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <StyledSheetContent ref={ref} {...props}>
        {children}
      </StyledSheetContent>
    </SheetPortal>
  )
})
