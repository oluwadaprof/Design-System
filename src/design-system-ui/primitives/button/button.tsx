'use client'

import { type RecipeVariantProps, cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as React from 'react'
import { Fragment } from 'react'

import { KeyboardShortcut } from '../keyboard-shortcut'
import { Spinner } from '../loaders'
import { Span } from '../text'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

export const buttonStyle = cva({
  base: {
    boxSizing: 'border-box',
    rounded: 'xl',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    w: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1',
    userSelect: 'none',
    // transition: 'all 0.2s ease',
    fontWeight: '500',

    _disabled: {
      opacity: '0.6',
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },

    '& span': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  variants: {
    look: {
      form: {
        w: '100%',
        border: 'subtle',
        bg: 'transparent',
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',
        fontWeight: '400'
      },
      ghost: {
        bg: 'transparent'
      },
      transparent: {
        bg: 'transparent',
        color: 'sAppText',

        _hover: {
          bg: 'background.muted'
        }
      },
      brand: {
        bg: 'brand.orangePrimaryA.9',
        color: 'white',
        opacity: '1',

        _hover: {
         _disabled: {
         bg: 'brand.orangePrimaryA.8'
         }
        }
      },
      danger: {
        bg: 'sErrorAlpha.9',
        border: '1px solid transparent',
        color: 'gray.1',

        '& *': {
          borderColor: 'gray.1',
          color: 'gray.1'
        },

        _hover: {
          _disabled: {
            opacity: '0.8'
          }
        }
      },
      dangerOutline: {
        border: 'error',
        color: 'sAppErrorText',

        _hover: {
          _disabled: {
            opacity: '0.8'
          }
        }
      },
      dangerTransparent: {
        color: 'sAppErrorText',

        _hover: {
          bg: 'sMutedBackground',
          _disabled: {
            opacity: '0.8'
          }
        }
      }
    },
    size: {
      md: {
        fontSize: '2',
        px: '3.2',
        h: '3.8rem',
        rounded: 'xl'
      },
      sm: {
        fontSize: '2',
        px: '1.5',
        h: '3.4rem',
        rounded: 'lg'
      },
      xs: {
        fontSize: '1',
        px: '1.5',
        h: '2.8rem',
        rounded: 'lg'
      },
      attribute: {
        fontSize: '2',
        fontWeight: '500',
        px: '2',
        h: '2.8rem',
        rounded: 'lg'
      },
      auto: {}
  },
    use: {
      link: {
        display: 'inline-flex'
      },
      button: {
        display: 'flex'
      }
    },
    activeLook: {
      gray: {
        '&[data-state=active]': {
          color: 'sAppText',
          bg: 'sMutedBackground',
          opacity: '1'
        },

        '&[data-state=on]': {
          color: 'sAppText',
          bg: 'sMutedBackground',
          opacity: '1'
        },

        '&[data-state=open]': {
          color: 'sAppText',
          bg: 'sMutedBackground',
          opacity: '1'
        }
      },
      purple: {
        '&[data-state=active]': {
          bg: 'sPrimaryAlpha.9',
          color: 'white',
          opacity: '1',

          _hover: {
            bg: 'sPrimaryAlpha.9'
          }
        },

        '&[data-state=on]': {
          bg: 'sPrimaryAlpha.9',
          color: 'white',
          opacity: '1',

          _hover: {
            bg: 'sPrimaryAlpha.9'
          }
        }
      }
    }
  },
  defaultVariants: {
    look: 'brand',
    size: 'sm',
    use: 'button',
    activeLook: 'purple'
  }
})

const StyledButton = styled('button', buttonStyle)

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>

export type ButtonProps = {
  isLoading?: boolean
  isDisabled?: boolean
  loadingText?: string
  tooltipChildren?: React.ReactNode
  tooltipSide?: 'top' | 'bottom' | 'left' | 'right'
  shortcut?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants &
  JsxStyleProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    isLoading,
    isDisabled,
    loadingText,
    children,
    tooltipChildren,
    tooltipSide = 'bottom',
    shortcut,
    ...props
  },
  ref
) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <StyledButton disabled={isLoading || isDisabled} ref={ref} type="button" {...props}>
          {!isLoading ? (
            <Fragment>
              {children}
              {shortcut && <KeyboardShortcut size={props.size}>{shortcut}</KeyboardShortcut>}
            </Fragment>
          ) : (
            <>
              {loadingText && <Span pr="1">{loadingText}</Span>}
              <Spinner size={props.size} look={props.look === 'brand' ? 'purple' : props.look || 'form'} />
            </>
          )}
        </StyledButton>
      </TooltipTrigger>
      {tooltipChildren && (
        <TooltipContent align="start" side={tooltipSide}>
          {tooltipChildren}
        </TooltipContent>
      )}
    </Tooltip>
  )
})
