import { ScrollAreaViewport, Thumb } from '@radix-ui/react-scroll-area'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ScrollArea } from './scroll-area'
import { ScrollBar } from './scroll-bar'

const meta: Meta = {
  title: 'ScrollArea',
  component: ScrollArea,
  argTypes: {
    width: { control: 'text' },
    content: { control: 'text' },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio'
      }
    }
  }
}

export default meta

type ScrollAreaStoryArgs = {
  width: string
  content: string
  orientation: 'vertical' | 'horizontal'
}

const Template: StoryFn<ScrollAreaStoryArgs> = (args) => (
  <ScrollArea style={{ width: args.width }}>
    <ScrollAreaViewport>
      <div style={{ padding: '2rem', height: '100vh' }}>{args.content}</div>
    </ScrollAreaViewport>
    <ScrollBar orientation={args.orientation}>
      <Thumb />
    </ScrollBar>
  </ScrollArea>
)

export const ScrollAreaStory = Template.bind({})
ScrollAreaStory.args = {
  orientation: 'vertical',
  width: '30rem',
  content: 'This is some scrollable content.'.repeat(50)
}
