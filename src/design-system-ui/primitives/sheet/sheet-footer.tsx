import { Flex, FlexProps } from '@design-system-ui/styled-system/jsx'
import React from 'react'



export const SheetFooter = React.forwardRef<HTMLDivElement, FlexProps>(function ModalFooter(
  { ...props },
  ref
) {
  return (
    <Flex ref={ref} glass="popup" justify="flex-end" w="full" gap="3" px="4" py="3" {...props} />
  )
})
