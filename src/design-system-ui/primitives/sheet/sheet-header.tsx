'use client'

import * as React from 'react'



import { Flex } from '../layout'
import { FlexProps } from '@design-system-ui/styled-system/jsx'

export const SheetHeader = React.forwardRef<HTMLDivElement, FlexProps>(function SheetHeader(
  { ...props },
  ref
) {
  return (
    <Flex
      ref={ref}
      glass="popup"
      justify="space-between"
      align="center"
      py="3"
      px="4"
      borderBottom="subtle"
      roundedTopLeft="inherit"
      roundedTopRight="inherit"
      {...props}
    />
  )
})
