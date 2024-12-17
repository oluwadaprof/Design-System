import type { Meta, StoryObj } from '@storybook/react'

import { SelectWithSearch } from '.'
import { TooltipProvider } from '../tooltip'

const meta: Meta<typeof SelectWithSearch> = {
  component: SelectWithSearch,
  title: 'SelectWithSearch'
}

export default meta

type Story = StoryObj<typeof SelectWithSearch>

const countries = [
  {
    label: 'Gotham',
    value: 'Gotham'
  }
]

export const Primary: Story = {
  render: (args) => {
    return (
      <TooltipProvider>
        <SelectWithSearch {...args} options={countries} />
      </TooltipProvider>
    )
  }
}
