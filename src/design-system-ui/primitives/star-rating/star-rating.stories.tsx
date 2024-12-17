import type { Meta, StoryObj } from '@storybook/react'

import { StarRating } from './star-rating'

const meta: Meta<typeof StarRating> = {
  component: StarRating,
  title: 'StarRating'
}

export default meta

type Story = StoryObj<typeof StarRating>

export const Primary: Story = {
  render: (args) => {
    return <StarRating {...args} />
  }
}
