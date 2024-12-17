import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle'
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  render: (args) => {
    return <Toggle {...args} />
  }
}
