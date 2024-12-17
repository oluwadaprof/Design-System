import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar'
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  render: (args) => {
    return <Avatar {...args} />
  }
}
