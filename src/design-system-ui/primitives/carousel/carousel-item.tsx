import React from 'react'

import { Box } from '../layout'
import { useCarousel } from './use-carousel'

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <Box
        ref={ref}
        role="group"
        aria-roledescription="slide"
        w="max-content"
        minW="0"
        flexShrink="0"
        flexGrow="0"
        pl={orientation === 'horizontal' ? '4' : 0}
        pt={orientation === 'horizontal' ? '4' : 0}
        {...props}
      />
    )
  }
)

CarouselItem.displayName = 'CarouselItem'
