'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

export const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
)
