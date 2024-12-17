import { styled } from '@design-system-ui/styled-system/jsx'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'
import { pickTextColorBasedOnBg, stringToColour } from 'src/utils/color'



const StyledAvatarFallback = styled(AvatarPrimitive.Fallback)

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & { name: string }
>(function AvatarFallback({ className, name, ...props }, ref) {
  const background = stringToColour(name)
  const color = pickTextColorBasedOnBg(background)

  return (
    <StyledAvatarFallback
      style={{ background, color }}
      ref={ref}
      {...props}
      className={className}
    />
  )
})
