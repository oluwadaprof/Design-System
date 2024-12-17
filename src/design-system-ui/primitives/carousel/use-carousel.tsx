import React from 'react'

import { CarouselContext } from './carousel-ctx'

export const useCarousel = () => {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}
