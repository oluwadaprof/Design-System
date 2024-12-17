import { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Spinner'
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  render: (args) => {
    return <Spinner {...args} />
  }
}
