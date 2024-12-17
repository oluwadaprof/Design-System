import type { Meta, StoryObj } from '@storybook/react'

import { TooltipProvider } from '../tooltip'
import { MultiSelectWithSearch } from './multi-select'

const meta: Meta<typeof MultiSelectWithSearch> = {
  component: MultiSelectWithSearch,
  title: 'MultiSelectWithSearch'
}

export default meta

type Story = StoryObj<typeof MultiSelectWithSearch>

export const Primary: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <MultiSelectWithSearch {...args} options={[]} />
      </TooltipProvider>
    )
  }
}
