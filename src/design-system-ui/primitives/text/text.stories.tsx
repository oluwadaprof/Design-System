import type { Meta, StoryObj } from '@storybook/react'

import { Heading, Span, Text } from './text'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Text',
  args: {
    children: 'back'
  }
}

export default meta

type TextStory = StoryObj<typeof Text>

type SpanStory = StoryObj<typeof Span>

type HeadingStory = StoryObj<typeof Heading>

export const TextPrimary: TextStory = {
  render: (args) => {
    return <Text {...args}>{args.children}</Text>
  }
}

export const SpanPrimary: SpanStory = {
  render: (args) => {
    return <Span {...args}>{args.children}</Span>
  }
}

export const HeadingStory: HeadingStory = {
  render: (args) => {
    return <Heading {...args}>{args.children}</Heading>
  }
}
