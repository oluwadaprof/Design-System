import { RadioGroupProps } from '@radix-ui/react-radio-group'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { HStack } from '../layout'
import { Text } from '../text'
import { RadioGroup } from './radio-group'
import { RadioGroupIndicator } from './radio-group-indicator'
import { RadioGroupItem } from './radio-group-item'

interface RadioGroupComponentProps extends RadioGroupProps {
  itemSize?: 'sm' | 'md'
}
const meta: Meta<RadioGroupComponentProps> = {
  component: RadioGroup as any,
  subcomponents: {
    RadioGroupItem: RadioGroupItem as React.ComponentType<any>,
    RadioGroupIndicator: RadioGroupIndicator as React.ComponentType<any>
  },
  title: 'Components/RadioGroup',
  argTypes: {
    itemSize: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the RadioGroupItem',
      table: {
        category: 'RadioGroupItem'
      }
    }
  }
}

export default meta
type Story = StoryObj<RadioGroupComponentProps>

export const Default: Story = {
  render: ({ itemSize, ...args }) => (
    <RadioGroup defaultValue="option1" {...args}>
      <HStack>
        <RadioGroupItem size={itemSize} value="option1" />
        <Text> Option 1</Text>
      </HStack>

      <HStack>
        <RadioGroupItem size={itemSize} value="option2" />
        <Text> Option 2</Text>
      </HStack>

      <HStack>
        <RadioGroupItem size={itemSize} value="option3" />
        <Text> Option 3</Text>
      </HStack>
    </RadioGroup>
  ),
  args: {
    itemSize: 'md'
  }
}
