'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'


import { AvatarImage } from './avatar-image'
import { avatarStyles } from './styles'
import { AvatarVariants } from './types'
import { css, cx } from '@design-system-ui/styled-system/css'
import { AvatarFallback } from './avatar-fallback'
import { getNameInitials } from 'src/utils/text'

export type AvatarProps = {
  image?: string
  name: string
  imageClassName?: string
  fallbackClassName?: string
} & AvatarVariants

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarProps
>(function Avatar({ size, shape, image, name, imageClassName, fallbackClassName, ...props }, ref) {
  const fallbackStyles = cx(
    css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      p: '1'
    }),
    avatarStyles({ size, shape }),
    imageClassName
  )
  const imageStyles = cx(avatarStyles({ size, shape }), fallbackClassName)

  return (
    <AvatarPrimitive.Root ref={ref} {...props}>
      <AvatarImage src={image} alt={name} className={imageStyles} />
      <AvatarFallback name={name} className={fallbackStyles}>
        {getNameInitials(name)}
      </AvatarFallback>
    </AvatarPrimitive.Root>
  )
})
