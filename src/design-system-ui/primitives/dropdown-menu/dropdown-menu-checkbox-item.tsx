'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'



import { Span } from '../text'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { Icons } from '@design-system-ui/icons/base'

type Element = React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>

type Props = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> &
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

const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, checkboxItemStyles)

export const DropdownMenuCheckboxItem = React.forwardRef<Element, Props>(
  function DropdownMenuCheckboxItem({ children, showIndicator, checked, ...props }, ref) {
    return (
      <StyledCheckboxItem ref={ref} checked={checked} {...props}>
        {children}
        {showIndicator && (
          <Span display="flex" justifyContent="center" alignItems="center">
            <DropdownMenuPrimitive.ItemIndicator>
              <Icons.check size={14} />
            </DropdownMenuPrimitive.ItemIndicator>
          </Span>
        )}
      </StyledCheckboxItem>
    )
  }
)
