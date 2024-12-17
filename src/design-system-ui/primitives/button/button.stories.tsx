import type { Meta, StoryObj } from '@storybook/react'

import { TooltipProvider } from '../tooltip'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  args: {
    children: 'back'
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <Button {...args}>{args.children}</Button>
      </TooltipProvider>
    )
  }
}
