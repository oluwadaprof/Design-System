import { cva, RecipeVariantProps } from '@design-system-ui/styled-system/css'
import { styled } from '@design-system-ui/styled-system/jsx'
import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import * as React from 'react'



const textareaStyles = cva({
  base: {
    bg: 'transparent',
    w: '100%',
    outline: 'none',
    verticalAlign: 'top',

    _disabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },

    _placeholder: {
      color: 'sFormPlaceholder'
    }
  },
  variants: {
    look: {
      form: {
        border: 'subtle',

        _focus: {
          border: 'focused'
        }
      },
      subtle: {
        border: 'subtle',

        _focus: {
          border: 'focused'
        }
      },
      ghost: {}
    },
    use: {
      md: {
        fontSize: '2',
        px: '3.5',
        pt: '3.5',
        rounded: 'xl'
      },
      sm: {
        fontSize: '2',
        px: '2',
        pt: '2',
        rounded: 'lg'
      },
      xs: {
        fontSize: '1',
        px: '2',
        pt: '2',
        rounded: 'lg'
      }
    }
  },
  defaultVariants: {
    look: 'subtle'
  }
})

const StyledTextArea = styled('textarea', textareaStyles)

type TextareaVariants = RecipeVariantProps<typeof textareaStyles>

export type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  JsxStyleProps &
  TextareaVariants

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(function Textarea(
  { ...props },
  ref
) {
  return <StyledTextArea ref={ref} {...props} />
})

export { Textarea }
