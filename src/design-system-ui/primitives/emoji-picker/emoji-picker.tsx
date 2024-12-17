'use client'

import { EmojiClickData } from 'emoji-picker-react'
import * as React from 'react'



import { Box } from '../layout'
import { ScrollableContainer } from '../scroll-area'
import { Emojis } from './emojis'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

export type TEmojiData = EmojiClickData

export const EmojiPicker = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    trigger: React.ReactNode
    onEmojiSelect: (val: EmojiClickData) => void
  }
>(function EmojiPicker({ onEmojiSelect, trigger, ...props }, ref) {
  const [open, onOpenChange] = React.useState(false)

  const onEmojiClick = (emoji: EmojiClickData) => {
    onOpenChange(false)
    onEmojiSelect(emoji)
  }

  return (
    <Box ref={ref} {...props}>
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent w="32rem" mx="2.5" px="2.5" sideOffset={10}>
          <ScrollableContainer>
            <Emojis onEmojiClick={onEmojiClick} />
          </ScrollableContainer>
        </PopoverContent>
      </Popover>
    </Box>
  )
})
