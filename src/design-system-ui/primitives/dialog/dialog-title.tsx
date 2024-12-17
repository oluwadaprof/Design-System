'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



type Element = React.ElementRef<typeof DialogPrimitive.Title>

type Props = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & JsxStyleProps

const titleStyles = cva({
  base: {
    textStyle: 'modalTitle',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5'
  }
})

const StyledDialogTitle = styled(DialogPrimitive.Title, titleStyles)

export const DialogTitle = React.forwardRef<Element, Props>(function DialogTitle(
  { ...props },
  ref
) {
  return <StyledDialogTitle ref={ref} {...props} />
})
