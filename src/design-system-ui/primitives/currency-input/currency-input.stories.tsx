import type { Meta, StoryObj } from '@storybook/react'

import { CurrencyInput } from './currency-input'

const meta: Meta<typeof CurrencyInput> = {
  component: CurrencyInput,
  title: 'Currency Input'
}

export default meta

type Story = StoryObj<typeof CurrencyInput>

export const Primary: Story = {
  render: (args) => {
    return <CurrencyInput {...args} />
  }
}
