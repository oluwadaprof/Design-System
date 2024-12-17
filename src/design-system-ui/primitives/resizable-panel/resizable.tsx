'use client'

import * as ResizablePrimitive from 'react-resizable-panels'



import { Box } from '../layout'
import { css, cx } from '@design-system-ui/styled-system/css'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { Icons } from '@design-system-ui/icons/base'

const groupStyles = css({
  display: 'flex',
  h: '100%',
  w: '100%',

  '&[data-panel-group-direction=vertical]': {
    flexDir: 'column'
  }
})

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup> & JsxStyleProps) => (
  <ResizablePrimitive.PanelGroup className={cx(groupStyles, className)} {...props} />
)

const ResizablePanel = ResizablePrimitive.Panel

const handleStyles = css({
  pos: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'sMutedBackground',
  w: '1px',

  '&:after': {
    pos: 'absolute',
    insetY: '0',
    left: '50%',
    w: '4px',
    transform: 'translateX(50%)'
  },

  '&:focus-visible': {
    outline: 'none',
    border: 'focused'
  },

  '&[data-panel-group-direction=vertical]': {
    h: '1px',
    w: '100%',

    '&:after': {
      left: 0,
      h: '4px',
      w: '100%',
      transform: 'translate(0, 50%)'
    }
  },

  '&[data-panel-group-direction=vertical] > div': {
    transform: 'rotate(90deg)'
  }
})

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
} & JsxStyleProps) => (
  <ResizablePrimitive.PanelResizeHandle className={cx(handleStyles, className)} {...props}>
    {withHandle && (
      <Box
        zIndex="10"
        h="1.6rem"
        w="1.2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="subtle"
      >
        <Icons.gripVertical className={css({ w: '1rem', h: '1rem' })} />
      </Box>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
