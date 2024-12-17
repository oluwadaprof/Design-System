import { styled } from '@design-system-ui/styled-system/jsx'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'



const StyledAvatarImage = styled(AvatarPrimitive.Image)

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(function AvatarImage({ className, ...props }, ref) {
  return <StyledAvatarImage ref={ref} border="subtle" {...props} className={className} />
})
