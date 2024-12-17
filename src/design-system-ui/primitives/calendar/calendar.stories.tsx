import type { Meta, StoryObj } from '@storybook/react'

import { TooltipProvider } from '../tooltip'
import { Calendar } from './calendar'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar'
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Primary: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <Calendar {...args} />
      </TooltipProvider>
    )
  }
}
