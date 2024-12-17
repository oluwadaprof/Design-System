'use client'

import { isCssProperty, styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { HTMLMotionProps, isValidMotionProp, motion } from 'framer-motion'



type Props = Omit<JsxStyleProps, 'transition'> & HTMLMotionProps<'div'>

export const MotionDiv = styled(
  motion.div,
  {},
  {
    shouldForwardProp: (prop, variantKeys) =>
      isValidMotionProp(prop) || (!variantKeys.includes(prop) && !isCssProperty(prop))
  }
) as React.FC<Props>
