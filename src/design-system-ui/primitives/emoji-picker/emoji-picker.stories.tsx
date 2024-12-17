import { Meta } from '@storybook/react'
import { EmojiClickData } from 'emoji-picker-react'
import { useState } from 'react'

import { Box } from '../layout'
import { Emojis } from './emojis'

const meta: Meta = {
  title: 'Emojis',
  component: Emojis
}

export default meta

const Template = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.emoji)
  }

  return (
    <Box border="subtle" rounded="sm" px="4">
      <Emojis onEmojiClick={handleEmojiClick} />
      {selectedEmoji && <Box mt="4">Selected Emoji: {selectedEmoji}</Box>}
    </Box>
  )
}

export const EmojiPickerStory = Template.bind({})
