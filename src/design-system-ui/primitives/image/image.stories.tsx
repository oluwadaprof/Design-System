import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './image'

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Image'
}

export default meta

type Story = StoryObj<typeof Image>

export const Primary: Story = {
  render: (args) => {
    return <Image {...args} alt="testing" src="images/dashboard/new-lead.png" />
  }
}
