import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Progress } from './progress'

const meta: Meta = {
  title: 'Progress',
  component: Progress,
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' }
  }
}

export default meta

type ProgressStoryArgs = {
  value: number
  max: number
}

const Template: StoryFn<ProgressStoryArgs> = (args) => (
  <Progress
    value={args.value}
    max={args.max}
    style={{ width: '100%', height: '2rem', backgroundColor: '#e0e0e0' }}
  />
)

export const ProgressStory = Template.bind({})
ProgressStory.args = {
  value: 50,
  max: 100
}
