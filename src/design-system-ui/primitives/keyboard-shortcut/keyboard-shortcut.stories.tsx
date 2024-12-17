import type { Meta, StoryObj } from '@storybook/react'

import { Icons } from 'public/images/design-system-ui/icons/base'

import { KeyboardShortcut } from './keyboard-shortcut'

const meta: Meta<typeof KeyboardShortcut> = {
  component: KeyboardShortcut,
  title: 'Keyboard Shortcut'
}

export default meta

type Story = StoryObj<typeof KeyboardShortcut>

export const Primary: Story = {
  render: (args) => {
    return (
      <KeyboardShortcut {...args}>
        <Icons.cornerDownLeft />
      </KeyboardShortcut>
    )
  }
}
