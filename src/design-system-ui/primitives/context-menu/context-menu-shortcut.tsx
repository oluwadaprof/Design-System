import { Span } from '../text'

export const ContextMenuShortcut = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <Span ml="auto" fontSize="1" letterSpacing="0.1rem" opacity="0.5" {...props} />
}
