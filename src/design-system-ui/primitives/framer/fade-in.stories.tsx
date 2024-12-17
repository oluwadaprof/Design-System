import type { Meta, StoryObj } from '@storybook/react'

import { Box } from '../layout'
import { FadeIn } from './fade-in'

const meta: Meta<typeof FadeIn> = {
  component: FadeIn,
  title: 'FadeIn'
}

export default meta

type Story = StoryObj<typeof FadeIn>

export const Primary: Story = {
  render: (args) => {
    return (
      <FadeIn {...args}>
        <Box h="5rem" w="5rem" bgColor="userColors.green"></Box>
      </FadeIn>
    )
  }
}
