'use client'

import { css, cx } from '@design-system-ui/styled-system/css'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'



const selectContentStyles = css({
  pos: 'relative',
  zIndex: '50',
  w: '100%',
  minW: '10rem',
  overflow: 'hidden',
  rounded: 'xl',
  border: 'subtle',
  bg: 'sAppPanelBackground',
  glass: 'popup',

  '&[data-state=open]': {
    animation: 'popoverUpIn'
  },

  '&[data-state=closed]': {
    animation: 'popoverHide'
  }
})

const selectContenPoppertStyles = css({
  '&[data-side=bottom]': {
    transform: 'translateY(0.2rem)'
  },
  '&[data-side=left]': {
    transform: 'translateX(0.2rem)'
  },
  '&[data-side=right]': {
    transform: 'translateX(0.2rem)'
  },
  '&[data-side=top]': {
    transform: 'translateY(0.2rem)'
  }
})

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(function SelectContent(
  { className, children, position = 'popper', sideOffset = 5, ...props },
  ref
) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cx(
          selectContentStyles,
          position === 'popper' && selectContenPoppertStyles,
          className
        )}
        position={position}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cx(css({ p: '4px', rounded: 'inherit' }))}
          style={
            position === 'popper'
              ? {
                  height: 'var(--radix-select-trigger-height)',
                  width: '100%',
                  minWidth: 'var(--radix-select-trigger-width'
                }
              : {}
          }
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})
