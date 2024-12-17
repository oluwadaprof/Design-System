'use client'

import Link from 'next/link'
import React, { Fragment } from 'react'



import { buttonStyle } from '../button'
import { KeyboardShortcut } from '../keyboard-shortcut'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { TooltipContentProps } from '../tooltip/tooltip-content'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'

const StyledNextLink = styled(Link, buttonStyle)

export type LinkVariants = RecipeVariantProps<typeof buttonStyle>

export type NextLinkProps = {
  href: string
  disabled?: boolean
  tooltipContentProps?: TooltipContentProps
  shortcut?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkVariants &
  JsxStyleProps

export const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps>(function NextLink(
  { children, tooltipContentProps, shortcut, ...props },
  ref
) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <StyledNextLink ref={ref} type="button" {...props}>
          <Fragment>
            {children}
            {shortcut && <KeyboardShortcut size={props.size}>{shortcut}</KeyboardShortcut>}
          </Fragment>
        </StyledNextLink>
      </TooltipTrigger>
      {tooltipContentProps && <TooltipContent align="start" {...tooltipContentProps} />}
    </Tooltip>
  )
})

export const Anchor = styled.a
