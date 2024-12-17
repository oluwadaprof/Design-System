import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input'
}

export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: { look: 'subtle', use: 'md' }
}
