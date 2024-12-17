'use client'

import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'


type Element = React.ElementRef<typeof SelectPrimitive.Label>

type Props = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>

const styledLabel = cva({
  base: {
    py: '1.5',
    pr: '4',
    fontSize: '1'
  }
})

const StyledLabel = styled(SelectPrimitive.Label, styledLabel)

export const SelectLabel = React.forwardRef<Element, Props>(function SelectLabel(
  { ...props },
  ref
) {
  return <StyledLabel ref={ref} {...props} />
})
