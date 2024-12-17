'use client'

import { css, cx } from '@design-system-ui/styled-system/css'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'


const commandStyles = css({
  display: 'flex',
  h: '100%',
  w: '100%',
  flexDir: 'column',
  overflow: 'hidden',
  rounded: 'xl',
  // border: 'subtle',
  // bg: 'sMutedBackground',
  // backdropFilter: 'blur(4rem)',

  '&[data-state=open]': {
    animation: 'popoverUpIn'
  }
})

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(function Command({ className, ...props }, ref) {
  return <CommandPrimitive ref={ref} className={cx(commandStyles, className)} {...props} />
})
