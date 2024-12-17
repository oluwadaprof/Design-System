import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Markdown } from './markdown'

const meta: Meta = {
  title: 'Markdown',
  component: Markdown,
  argTypes: {
    content: { control: 'text' }
  }
}

export default meta

type ReactMarkdownStoryArgs = {
  content: string
}

const Template: StoryFn<ReactMarkdownStoryArgs> = (args) => (
  <div style={{ padding: '2rem', border: '.1rem solid #ddd', borderRadius: '.8rem' }}>
    <Markdown>{args.content}</Markdown>
  </div>
)

export const MarkdownStory = Template.bind({})
MarkdownStory.args = {
  content: `# Heading

This is a **bold** text.

## Sub-heading

- Item 1
- Item 2
- Item 3
  `
}
