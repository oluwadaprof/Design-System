import React from 'react'



import { Box } from '../layout'
import { useCarousel } from './use-carousel'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & JsxStyleProps
>(({ ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <Box ref={carouselRef} overflow="hidden">
      <Box
        ref={ref}
        flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
        ml={orientation === 'horizontal' ? '-4' : '0'}
        mt={orientation === 'vertical' ? '-4' : '0'}
        {...props}
      />
    </Box>
  )
})
CarouselContent.displayName = 'CarouselContent'
