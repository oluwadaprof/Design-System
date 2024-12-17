'use client'

import { Icons, TIcon } from '@design-system-ui/icons/base'
import { css, cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'



type TElement = React.ElementRef<typeof CheckboxPrimitive.Root>

type Props = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  JsxStyleProps & {
    icon?: TIcon
  }

const checkboxStyles = cva({
  base: {
    w: '1.6rem',
    h: '1.6rem',
    border: '1px solid token(colors.sGray.6)',
    cursor: 'pointer',
    rounded: 'sm',

    _disabled: { cursor: 'not-allowed', opacity: '0.5' },

    '&[data-state=checked]': {
      bg: 'sPrimaryAlpha.9',
      border: '1px solid transparent'
    }
  }
})

const StyledCheckbox = styled(CheckboxPrimitive.Root, checkboxStyles)

const indicatorStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'inherit',
    overflow: 'hidden'
  }
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, indicatorStyles)

export const Checkbox = React.forwardRef<TElement, Props>(function Checkbox(
  { icon, ...props },
  ref
) {
  const Icon = icon || Icons.check

  return (
    <StyledCheckbox ref={ref} {...props}>
      <StyledIndicator>
        <Icon
          className={css({
            w: '1.6rem',
            h: 'auto',
            color: 'gray.1',
            background: 'sPrimaryAlpha.9',
            _focus: { outline: 'none', border: 'focused' },
            rounded: '1'
          })}
          size={14}
        />
      </StyledIndicator>
    </StyledCheckbox>
  )
})
