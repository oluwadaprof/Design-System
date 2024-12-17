import type { Meta, StoryObj } from '@storybook/react'

import { NextLink } from './link'

const meta: Meta<typeof NextLink> = {
  component: NextLink,
  title: 'Link'
}
export default meta

type Story = StoryObj<typeof NextLink>

export const Primary: Story = {
  render: (args) => {
    return <NextLink {...args} href="" />
  }
}
