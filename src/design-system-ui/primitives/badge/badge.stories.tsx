import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  args: {
    children: 'badge'
  }
}

export default meta

type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  render: (args) => {
    return <Badge {...args}>{args.children}</Badge>
  }
}
