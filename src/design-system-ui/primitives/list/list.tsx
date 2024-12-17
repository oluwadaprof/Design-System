import { cva, RecipeVariantProps } from "@design-system-ui/styled-system/css"
import { styled } from "@design-system-ui/styled-system/jsx"


// Define list variant styles
const listStyle = cva({
  base: {
    marginBottom: '1.5'
  },
  variants: {
    look: {
      ordered: {
        listStyleType: 'disc'
      },
      unordered: {
        listStyleType: 'decimal'
      }
    }
  },
  defaultVariants: {
    look: 'ordered'
  }
})

export const Ul = styled('ul')
export const Ol = styled('ol')
export const Li = styled('li', listStyle)

export type ListVariants = RecipeVariantProps<typeof listStyle>
