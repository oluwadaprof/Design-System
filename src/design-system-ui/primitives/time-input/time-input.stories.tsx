import type { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { TimeInput } from './time-input'

const meta: Meta<typeof TimeInput> = {
  component: TimeInput,
  title: 'Time Input'
}

export default meta

// type Story = StoryObj<typeof TimeInput>

// export const Primary: Story = {
//   render: (args) => {
//     return <TimeInput {...args} />
//   }
// }

const Template: StoryFn = () => {
  const [time, setTime] = useState<string>()

  return <TimeInput setTime={setTime} time={time} />
}

export const TimeInputStory = Template.bind({})
