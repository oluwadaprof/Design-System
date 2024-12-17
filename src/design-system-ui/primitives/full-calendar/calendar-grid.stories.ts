import type { Meta, StoryObj } from '@storybook/react'

import { FullCalendarGrid } from './calendar-grid'

const meta: Meta<typeof FullCalendarGrid> = {
  component: FullCalendarGrid,
  title: 'Calendar Grid'
}

export default meta

type Story = StoryObj<typeof FullCalendarGrid>

export const Primary: Story = {
  args: {}
}
