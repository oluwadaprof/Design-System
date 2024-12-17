import React from 'react'

import { Button } from '../button'
import { Span } from '../text'
import { useCarousel } from './use-carousel'

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ children, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button ref={ref} disabled={!canScrollNext} onClick={scrollNext} {...props}>
      {children}
      <Span srOnly>Next slide</Span>
    </Button>
  )
})
CarouselNext.displayName = 'CarouselNext'
