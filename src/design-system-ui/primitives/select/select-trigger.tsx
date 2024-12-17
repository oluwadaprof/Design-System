'use client'

import { Icons } from '@design-system-ui/icons/base'
import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'



const triggerStyles = cva({
  base: {
    w: 'full',
    border: 'subtle',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    whiteSpace: 'nowrap',

    _focus: {
      outline: 'none',
      border: 'focused'
    },

    _active: {
      border: 'focused'
    },

    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
      pointerEvents: 'none'
    },

    '&[data-placeholder]': {
      color: 'sFormPlaceholder'
    }
  },
  variants: {
    size: {
      md: {
        fontSize: '2',
        px: '3.5',
        h: '4rem',
        rounded: 'xl'
      },
      sm: {
        fontSize: '2',
        px: '2',
        h: '3.4rem',
        rounded: 'lg'
      },
      xs: {
        fontSize: '1',
        px: '2',
        h: '2.8rem',
        rounded: 'lg'
      }
    },
    look: {
      ghost: {
        bg: 'transparent'
      },
      transparent: {
        bg: 'transparent',

        _hover: {
          bg: 'sMutedBackground'
        }
      },
      purple: {
        bg: 'sPrimaryAlpha.9',

        _hover: {
          _disabled: {
            bg: 'sPrimaryAlpha.9'
          }
        }
      },
      gray: {
        bg: 'sMutedBackground',

        _hover: {
          _disabled: {
            bg: 'sMutedBackground'
          }
        }
      },
      grayOutline: {
        border: 'subtle',
        bg: 'transparent',
        shadow: 'sXs',

        _hover: {
          bg: 'sMutedBackground',

          _disabled: {
            bg: 'sMutedBackground'
          }
        }
      },
      danger: {
        border: '1px solid transparent',
        bg: 'error',

        _hover: {
          _disabled: {
            opacity: '0.8'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type TriggerVariants = RecipeVariantProps<typeof triggerStyles>

type Element = React.ElementRef<typeof SelectPrimitive.Trigger>

export type STriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
  JsxStyleProps &
  TriggerVariants

const StyledTrigger = styled(SelectPrimitive.Trigger, triggerStyles)

export const SelectTrigger = React.forwardRef<Element, STriggerProps>(function SelectTrigger(
  { children, ...props },
  ref
) {
  return (
    <StyledTrigger ref={ref} {...props}>
      {children}

      <SelectPrimitive.Icon asChild>
        <Icons.caretDown color="sAppMutedText" ml="0.4rem" size={14} />
      </SelectPrimitive.Icon>
    </StyledTrigger>
  )
})
