import React from 'react'

import { Button } from '../button'
import { Span } from '../text'
import { useCarousel } from './use-carousel'

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ children, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button ref={ref} disabled={!canScrollPrev} onClick={scrollPrev} {...props}>
      {children}
      <Span srOnly>Previous slide</Span>
    </Button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'
