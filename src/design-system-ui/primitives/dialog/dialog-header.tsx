import React from 'react'

import { Flex, FlexProps } from '@design-system-ui/styled-system/jsx'

export const DialogHeader = React.forwardRef<HTMLDivElement, FlexProps>(function DialogHeader(
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
