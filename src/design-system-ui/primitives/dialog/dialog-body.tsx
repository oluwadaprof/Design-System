import { Box, BoxProps } from '@design-system-ui/styled-system/jsx'
import React from 'react'



export const DialogBody = React.forwardRef<HTMLDivElement, BoxProps>(function ModalBody(
  { ...props },
  ref
) {
  return <Box ref={ref} py="3" px="4" maxH="90vh" overflowY="scroll" {...props} />
})
