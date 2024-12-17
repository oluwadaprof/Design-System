import type { Meta, StoryObj } from '@storybook/react'

import { Box } from './layout'

const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Box'
}

export default meta

type Story = StoryObj<typeof Box>

export const Primary: Story = {
  render: (args) => {
    return <Box {...args} h="5rem" w="5rem" color="darkErrorAlpha.7"></Box>
  }
}
