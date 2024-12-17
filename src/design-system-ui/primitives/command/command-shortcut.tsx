'use client'

import * as React from 'react'


import { Span } from '../text'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

export const CommandShortcut = ({
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & JsxStyleProps) => {
  return (
    <Span
      fontSize="1rem"
      rounded="sm"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontWeight="500"
      {...props}
    />
  )
}
