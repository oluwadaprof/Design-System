'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



import { Span } from '../text'
import { DialogOverlay } from './dialog-overlay'
import { DialogPortal } from './dialog-portal'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { css, cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { Icons } from '@design-system-ui/icons/base'

type Element = React.ElementRef<typeof DialogPrimitive.Content>

type Props = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
  JsxStyleProps & {
    showCloseIcon?: boolean
  }

const contentStyles = cva({
  base: {
    pos: 'fixed',
    left: '50%',
    top: '50%',
    zIndex: '50',
    transform: 'translate(-50%, -50%)',
    border: 'subtle',
    w: '100%',
    gap: '4',
    bg: 'sAppPanelBackground',
    glass: 'popup',
    rounded: 'xl',
    shadow: 'sLg',
    overflow: 'hidden',

    '&[data-state=open]': {
      animation: 'fadeElementIn'
    },
    '&[data-state=closed]': {
      animation: 'fadeElementOut'
    }
  }
})

const StyledDialogContent = styled(DialogPrimitive.Content, contentStyles)

const closeWrapperStyles = css({
  pos: 'absolute',
  right: '1.6rem',
  top: '1.6rem',
  color: 'sAppMutedText',
  transition: 'opacity 100ms',
  cursor: 'pointer',

  _hover: {
    opacity: '100'
  },

  _focus: {
    outline: 'none'
  },

  _disabled: {
    pointerEvents: 'none'
  }
})

const closeIconStyles = css({ w: '1.6rem', h: '1.6rem' })

export const DialogContent = React.forwardRef<Element, Props>(function DialogContent(
  { children, showCloseIcon = true, ...props },
  ref
) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <StyledDialogContent ref={ref} {...props}>
        {children}

        {showCloseIcon && (
          <DialogPrimitive.Close className={closeWrapperStyles}>
            <Icons.close className={closeIconStyles} />
            <Span srOnly>Close</Span>
          </DialogPrimitive.Close>
        )}
      </StyledDialogContent>
    </DialogPortal>
  )
})
