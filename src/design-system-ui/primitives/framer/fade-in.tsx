'use client'

import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { HTMLMotionProps } from 'framer-motion'
import * as React from 'react'
import { MotionDiv } from './motion-div'



type FadeInProps = Omit<JsxStyleProps, 'transition'> &
  HTMLMotionProps<'div'> &
  React.RefAttributes<HTMLDivElement>

export const FadeIn = React.forwardRef<typeof MotionDiv, FadeInProps>(function FadeIn(props, ref) {
  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      {...props}
    />
  )
})
