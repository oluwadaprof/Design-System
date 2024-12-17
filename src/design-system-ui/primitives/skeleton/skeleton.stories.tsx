import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Skeleton'
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  render: (args) => {
    return <Skeleton w="5rem" h="10rem" bgColor="sMutedBackground" {...args}></Skeleton>
  }
}
