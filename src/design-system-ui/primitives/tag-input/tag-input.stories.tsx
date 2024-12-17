import type { Meta } from '@storybook/react'
import { useState } from 'react'

import { Box } from '../layout'
import { TagInput } from './tag-input'

const meta: Meta<typeof TagInput> = {
  component: TagInput,
  title: 'Tag Input'
}

export default meta

const Template = () => {
  const [tags, setTags] = useState<string[]>([])

  const handleTags = (tag: string[]) => {
    setTags((prevTags: string[]) => [...prevTags, ...tag])
  }
  return (
    <Box border="subtle" rounded="sm">
      <TagInput placeholder="tags" value={tags} setValue={handleTags} />
    </Box>
  )
}

export const TagInputStory = Template.bind({})
