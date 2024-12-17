'use client'

import React from 'react'



import { Span } from '../text'
import { cx,css } from '@design-system-ui/styled-system/css'
import { Icons } from '@design-system-ui/icons/base'

export const AccordionCaret = () => {
  return (
    <Span>
      <Icons.caretDown
        className={cx(
          'caret',
          css({
            flexShrink: '0',
            transition: 'transform 200ms',
            color: 'sAppMutedText'
          })
        )}
      />
    </Span>
  )
}
