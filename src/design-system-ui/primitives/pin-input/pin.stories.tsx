import type { Meta, StoryObj } from '@storybook/react'

import { PinInput } from './pin-input'

const meta: Meta<typeof PinInput> = {
  component: PinInput,
  title: 'PinInput '
}

export default meta

type Story = StoryObj<typeof PinInput>

export const Primary: Story = {
  render: (args) => {
    return <PinInput {...args} />
  }
}
