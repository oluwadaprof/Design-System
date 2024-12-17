'use client'

import { css, cx } from '@design-system-ui/styled-system/css'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'



export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(function ScrollBar({ className, orientation = 'vertical', ...props }, ref) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cx(
        css({
          display: 'flex',
          touchAction: 'none',
          userSelect: 'none',
          transition: 'background 160ms ease-out'
        }),
        orientation === 'vertical' &&
          css({
            w: '4px'
          }),
        orientation === 'horizontal' && css({ flexDir: 'column', h: '4px' }),
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={css({
          flex: '1',
          pos: 'relative',
          bg: 'sMutedBackground',
          rounded: 'full',

          '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            minWidth: 44,
            minHeight: 44
          }
        })}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})
