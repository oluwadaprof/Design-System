import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch'
}

export default meta

type Story = StoryObj<typeof Switch>

export const Primary: Story = {
  render: (args) => {
    return <Switch {...args} />
  }
}
