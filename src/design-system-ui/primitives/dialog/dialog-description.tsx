'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'



type Element = React.ElementRef<typeof DialogPrimitive.Title>

type Props = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & JsxStyleProps

const descriptionStyles = cva({
  base: {
    fontSize: '2'
  }
})

const StyledDialogDescription = styled(DialogPrimitive.Description, descriptionStyles)

export const DialogDescription = React.forwardRef<Element, Props>(function DialogDescription(
  { ...props },
  ref
) {
  return <StyledDialogDescription ref={ref} {...props} />
})
