import * as React from 'react'

import { Box } from '../layout'

type SpinnerProps = {
  size?: string
}

export const Ellipsis = React.forwardRef<HTMLDivElement, SpinnerProps>(function Ellipsis({}, ref) {
  return (
    <Box
      ref={ref}
      // css={}
      _after={
        {
          // content: '...',
          // display: 'inline-block',
          // width: '3rem',
          // verticalAlign: 'bottom',
          // animation: 'ellipsis'
        }
      }
    />
  )
})
