'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'



import { Span } from '../text'
import { css, cva } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps, RecipeVariantProps } from '@design-system-ui/styled-system/types'
import { Icons } from '@design-system-ui/icons/base'

const selectItemStyles = cva({
  base: {
    position: 'relative',
    display: 'flex',
    w: '100%',
    cursor: 'pointer',
    userSelect: 'none',
    alignItems: 'center',
    rounded: 'xl',
    py: '1rem',
    px: '1rem',
    fontSize: '1',
    outline: 'none',

    _hover: {
      bg: 'sMutedBackground'
    },

    _focus: {
      bg: 'sMutedBackground'
    },

    _disabled: {
      pointerEvents: 'none',
      opacity: '0.5'
    },

    '&[data-highlighted]': {
      bg: 'sMutedBackground'
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
      },
      auto: {}
    }
  }
})

const StyledItem = styled(SelectPrimitive.Item, selectItemStyles)

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
    JsxStyleProps &
    RecipeVariantProps<typeof selectItemStyles>
>(function SelectItem({ children, ...props }, ref) {
  return (
    <StyledItem
      ref={ref}
      {...props}
      css={{
        ...props.css,
        '&[data-highlighted]': {
          bg: 'sMutedBackground'
        }
      }}
    >
      <Span
        pos="absolute"
        right="8px"
        w="1.4rem"
        h="1.4rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SelectPrimitive.ItemIndicator>
          <Icons.check className={css({ w: '1.4rem', h: '1.4rem' })} />
        </SelectPrimitive.ItemIndicator>
      </Span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </StyledItem>
  )
})
