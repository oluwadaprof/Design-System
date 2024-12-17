import type { Meta, StoryObj } from '@storybook/react'

import { EmailsInput } from './email-input'

const meta: Meta<typeof EmailsInput> = {
  component: EmailsInput,
  title: 'Email Input'
}

export default meta

type Story = StoryObj<typeof EmailsInput>

export const Primary: Story = {
  render: (args) => {
    return <EmailsInput {...args} />
  }
}
