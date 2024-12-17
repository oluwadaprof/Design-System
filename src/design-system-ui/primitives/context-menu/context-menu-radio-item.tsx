'use client'

import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import React from 'react'



import { Span } from '../text'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { css, cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { Icons } from '@design-system-ui/icons/base'

type Element = React.ElementRef<typeof ContextMenuPrimitive.RadioItem>

type Props = React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> & JsxStyleProps

const radioItemStyles = cva({
  base: {
    pos: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    rounded: '8px',
    py: '0.5rem',
    px: '0.5rem',
    // mx: '0.5rem',
    // my: '0.5rem',
    fontSize: '1',
    outline: 'none',
    transition: 'colors 200ms',

    // _hover: {
    //   bg: 'sMutedBackground'
    // },

    _disabled: {
      pointerEvents: 'none',
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }
})

const StyledRadio = styled(ContextMenuPrimitive.RadioItem, radioItemStyles)

export const ContextMenuRadioItem = React.forwardRef<Element, Props>(function ContextMenuRadioItem(
  { children, ...props },
  ref
) {
  return (
    <StyledRadio ref={ref} {...props}>
      <Span
        pos="absolute"
        right="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="1.3rem"
        w="1.3rem"
      >
        <ContextMenuPrimitive.ItemIndicator
          className={css({
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '10%',
            bg: 'sPrimaryAlpha.9'
          })}
        >
          <Icons.check size={12} color="white" />
        </ContextMenuPrimitive.ItemIndicator>
      </Span>
      {children}
    </StyledRadio>
  )
})
