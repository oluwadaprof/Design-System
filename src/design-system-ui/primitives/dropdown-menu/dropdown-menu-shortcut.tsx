'use client'



import { JsxStyleProps } from '@design-system-ui/styled-system/types'
import { Span } from '../text'

type Props = React.HTMLAttributes<HTMLSpanElement> & JsxStyleProps

export const DropdownMenuShortcut = ({ ...props }: Props) => {
  return <Span ml="auto" fontSize="1" letterSpacing="0.1rem" opacity="0.5" {...props} />
}
