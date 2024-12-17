'use client'

import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'



import { Flex } from '../layout'
import { css, cx } from '@design-system-ui/styled-system/css'
import { Icons } from '@design-system-ui/icons/base'

type Element = React.ElementRef<typeof CommandPrimitive.Input>

type Props = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
  icon?: React.ReactNode
  showIcon?: boolean
  wrapperProps?: React.ComponentPropsWithoutRef<typeof Flex>
}

const commandInput = css({
  display: 'flex',
  w: '100%',
  rounded: '4px',
  bg: 'transparent',
  py: '2.5',
  pl: '2.5',
  fontSize: '2',
  outline: 'none',

  _placeholder: {
    color: 'placeholder'
  },

  _disabled: {
    cursor: 'not-allowed',
    opacity: '0.5'
  }
})

export const CommandInput = React.forwardRef<Element, Props>(function CommandInput(
  { className, icon, showIcon = true, wrapperProps, ...props },
  ref
) {
  return (
    <Flex alignItems="center" px="2.5" cmdk-input-wrapper="" {...wrapperProps}>
      {showIcon && (
        <React.Fragment>{icon ? icon : <Icons.searchNormal size={14} />}</React.Fragment>
      )}
      <CommandPrimitive.Input ref={ref} className={cx(commandInput, className)} {...props} />
    </Flex>
  )
})
