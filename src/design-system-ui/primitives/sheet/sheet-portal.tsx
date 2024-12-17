'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

export const SheetPortal = ({ ...props }: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal {...props} />
)
