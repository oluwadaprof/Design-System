import type { Meta, StoryObj } from '@storybook/react'

import { Li, Ol, Ul } from './list'

const meta: Meta<typeof Ul> = {
  component: Ul,
  title: 'List'
}

export default meta

type Story = StoryObj<typeof Ul>

type StoryOl = StoryObj<typeof Ol>

const items = ['a', 'b', 'c']

export const UnorderedList: Story = {
  render: (args) => {
    return (
      <Ul {...args}>
        {items.map((item) => (
          <Li key={item}>{item}</Li>
        ))}
      </Ul>
    )
  }
}

export const OrderedList: StoryOl = {
  render: (args) => {
    return (
      <Ol {...args}>
        {items.map((item) => (
          <Li key={item}>{item}</Li>
        ))}
      </Ol>
    )
  }
}
