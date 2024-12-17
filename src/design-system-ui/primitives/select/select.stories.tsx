import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { css } from 'public/images/design-system-ui/styled-system/css'

import { Select } from './select'
import { SelectContent } from './select-content'
// import { SelectGroup } from './select-group'
import { SelectItem } from './select-item'
// import { SelectLabel } from './select-label'
// import { SelectSeparator } from './select-separator'
import { STriggerProps, SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'

interface SelectComponentProps {
  triggerSize?: STriggerProps['size']
  triggerLook?: STriggerProps['look']
  itemSize?: 'xs' | 'sm' | 'md'
}

const meta: Meta<SelectComponentProps> = {
  component: Select as React.FC<SelectComponentProps>,
  subcomponents: {
    SelectTrigger: SelectTrigger as React.ComponentType<STriggerProps | any>
    // SelectContent,
    // SelectValue,
    // SelectItem,
    // SelectSeparator,
    // SelectLabel,
    // SelectGroup
  },
  title: 'Components/Select',
  argTypes: {
    // Custom controls for SelectTrigger variants
    triggerSize: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
      description: 'Size of the SelectTrigger',
      table: {
        category: 'SelectTrigger'
      }
    },
    triggerLook: {
      control: 'select',
      options: ['ghost', 'transparent', 'purple', 'gray', 'grayOutline', 'danger'],
      description: 'Look of the SelectTrigger',
      table: {
        category: 'SelectTrigger'
      }
    },
    // Custom controls for SelectItem variants
    itemSize: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
      description: 'Size of the SelectItem',
      table: {
        category: 'SelectItem'
      }
    }
  }
}

export default meta

type Story = StoryObj<SelectComponentProps>

export const Default: Story = {
  render: ({ triggerSize, triggerLook, itemSize, ...args }) => (
    <Select {...args}>
      <SelectTrigger size={triggerSize} look={triggerLook}>
        <SelectValue w="9rem" placeholder="This week" />
      </SelectTrigger>
      <SelectContent className={css({ maxH: '20rem', overflowY: 'scroll' })}>
        <SelectItem size={itemSize} py="0.6rem" value="Last Week">
          This week
        </SelectItem>
        <SelectItem size={itemSize} py="0.6rem" value="The week after">
          The week after
        </SelectItem>
      </SelectContent>
    </Select>
  ),
  args: {
    triggerSize: 'md', // Default trigger size
    triggerLook: 'purple', // Default trigger look
    itemSize: 'md' // Default item size
  }
}

export const WithVariants: Story = {
  render: ({ triggerSize, triggerLook, itemSize, ...args }) => (
    <Select {...args}>
      <SelectTrigger size={triggerSize} look={triggerLook}>
        <SelectValue w="9rem" placeholder="This week" />
      </SelectTrigger>
      <SelectContent className={css({ maxH: '20rem', overflowY: 'scroll' })}>
        <SelectItem size={itemSize} py="0.6rem" value="Last Week">
          Last Week
        </SelectItem>
        <SelectItem size={itemSize} py="0.6rem" value="This week">
          This week
        </SelectItem>
        <SelectItem size={itemSize} py="0.6rem" value="The week after">
          The week after
        </SelectItem>
      </SelectContent>
    </Select>
  ),
  args: {
    triggerSize: 'sm',
    triggerLook: 'grayOutline',
    itemSize: 'sm'
  }
}
