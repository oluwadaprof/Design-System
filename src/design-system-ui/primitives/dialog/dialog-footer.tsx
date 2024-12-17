import { Flex, FlexProps } from '@design-system-ui/styled-system/jsx'
import React from 'react'



export const DialogFooter = React.forwardRef<HTMLDivElement, FlexProps>(function ModalFooter(
  { ...props },
  ref
) {
  return (
    <Flex
      ref={ref}
      glass="popup"
      justify="flex-end"
      w="full"
      borderTop="subtle"
      gap="3"
      px="4"
      py="3"
      {...props}
    />
  )
})
