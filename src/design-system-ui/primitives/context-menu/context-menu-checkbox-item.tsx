'use client'

import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'


import { Span } from '../text'
import { cva } from '@design-system-ui/styled-system/css'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { styled } from '@design-system-ui/styled-system/jsx'
import { Icons } from '@design-system-ui/icons/base'

type Element = React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>

type Props = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> &
  JsxStyleProps & { showIndicator?: boolean }

const checkboxItemStyles = cva({
  base: {
    pos: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    userSelect: 'none',
    outline: 'none',
    mx: '0.5rem',

    _focus: {
      bg: 'sMutedBackground'
    },

    _disabled: {
      opacity: '0.5'
    }
  }
})

const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, checkboxItemStyles)

export const ContextMenuCheckboxItem = React.forwardRef<Element, Props>(
  function ContextMenuCheckboxItem({ children, checked, ...props }, ref) {
    return (
      <StyledCheckboxItem ref={ref} checked={checked} {...props}>
        <Span display="flex" justifyContent="center" alignItems="center">
          <ContextMenuPrimitive.ItemIndicator>
            <Icons.check />
          </ContextMenuPrimitive.ItemIndicator>
        </Span>
        {children}
      </StyledCheckboxItem>
    )
  }
)
