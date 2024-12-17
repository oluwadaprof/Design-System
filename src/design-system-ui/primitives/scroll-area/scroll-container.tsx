'use client'

import { useEffect, useRef } from 'react'

export const ScrollableContainer = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element = ref.current!

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation()
    }
    const handleTouchMove = (e: TouchEvent) => {
      e.stopPropagation()
    }

    element.addEventListener('wheel', handleWheel, true)
    element.addEventListener('touchmove', handleTouchMove, true)

    return () => {
      element.removeEventListener('wheel', handleWheel, true)
      element.removeEventListener('touchmove', handleTouchMove, true)
    }
  }, [])

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  )
}
