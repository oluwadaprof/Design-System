import { Meta, StoryObj } from '@storybook/react'

import { Ellipsis } from './ellipsis'

const meta: Meta<typeof Ellipsis> = {
  component: Ellipsis,
  title: 'Ellipsis'
}

export default meta

type Story = StoryObj<typeof Ellipsis>

export const Primary: Story = {
  render: (args) => {
    return <Ellipsis {...args} />
  }
}
