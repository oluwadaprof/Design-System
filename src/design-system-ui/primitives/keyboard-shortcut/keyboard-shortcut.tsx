import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { BoxProps, styled } from '@design-system-ui/styled-system/jsx'
import React from 'react'



const styles = cva({
  base: {
    display: 'flex',
    // border: 'subtle',
    px: '0.5',
    py: '1px',
    gap: '0.5',
    opacity: '0.8',
    color: 'sAppMutedText'
  },
  variants: {
    size: {
      md: {
        my: '2',
        rounded: 'md'
      },
      sm: {
        my: '2',
        rounded: 'sm'
      },
      xs: {
        rounded: 'sm'
      },
      attribute: {},
      auto: {}
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

type Props = RecipeVariantProps<typeof styles> & BoxProps

const StyledWrapper = styled('div', styles)

export const KeyboardShortcut = ({ children, ...rest }: Props) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>
}
