import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as React from 'react'



const badgeStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    rounded: 'full',
    fontWeight: '500',
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms'
  },
  variants: {
    look: {
      light: {
        bg: 'white',
        color: 'black'
      },
      gray: {
        bg: 'sMutedBackground'
      },
      grayOutline: {
        bg: 'sMutedBackground',
        border: 'subtle'
      },
      primary: { bg: 'sPrimaryAlpha.3', border: 'focused', color: 'sAppPrimaryText' },
      primaryOutline: {
        border: 'focused',
        color: 'sAppPrimaryText'
      },
      success: {
        bg: 'sSuccessAlpha.3',
        border: 'success',
        color: 'sAppSuccessText'
      },
      successOutline: {
        border: 'success',
        color: 'sAppSuccessText'
      },
      warning: {
        bg: 'sWarningAlpha.3',
        color: 'sAppWarningText',
        border: 'warning'
      },
      warningOutline: {
        color: 'sAppWarningText',
        border: 'warning'
      },
      error: {
        bg: 'sErrorAlpha.3',
        color: 'sAppErrorText',
        border: 'error'
      },
      errorOutline: {
        bg: 'sErrorAlpha.2',
        color: 'sAppErrorText',
        border: 'error'
      }
    },
    size: {
      lg: {
        py: '1',
        px: '1.5',
        fontSize: '1'
      },
      md: {
        py: '0.5',
        px: '1',
        fontSize: '1'
      },
      sm: {
        py: '0.5',
        px: '1',
        fontSize: '1'
      },
      xs: {
        py: '0',
        px: '1',
        fontSize: '0.5'
      }
    }
  },
  defaultVariants: {
    look: 'light',
    size: 'md'
  }
})

const StyledBadge = styled('div', badgeStyles)

type BadgeVariants = RecipeVariantProps<typeof badgeStyles>

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariants & JsxStyleProps

export const Badge = ({ ...props }: BadgeProps) => {
  return <StyledBadge {...props} />
}
