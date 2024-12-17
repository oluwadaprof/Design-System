// Tabs.stories.tsx
import { TabsProps as RadixTabsProps } from '@radix-ui/react-tabs'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Icons } from 'public/images/design-system-ui/icons/base'
import { Flex } from 'public/images/design-system-ui/styled-system/jsx'
import { JsxStyleProps } from 'public/images/design-system-ui/styled-system/types'

import { Span } from '../text'
import { TabContent } from './tab-content'
import { TabTrigger } from './tab-trigger'
import { Tabs } from './tabs'
import { TabsList } from './tabs-list'

type JsxStylePropsWithoutConflicts = Omit<JsxStyleProps, 'color' | 'content' | 'translate'>

interface TabsComponentProps extends RadixTabsProps, JsxStylePropsWithoutConflicts {
  tabSize?: 'sm' | 'md'
}

const meta: Meta<TabsComponentProps> = {
  component: Tabs as React.FC<TabsComponentProps>,
  subcomponents: {
    TabsList: TabsList as React.FC<any>,
    TabTrigger: TabTrigger as React.FC<any>,
    TabContent: TabContent as React.FC<any>
  },
  title: 'Components/Tabs',
  argTypes: {
    tabSize: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the TabTrigger',
      table: {
        category: 'TabTrigger'
      }
    }
  }
}

export default meta

type Story = StoryObj<TabsComponentProps>

export const Default: Story = {
  render: ({ ...args }) => (
    <Tabs defaultValue="tab1" {...args}>
      <TabsList gap="2rem">
        <TabTrigger value="tab1">
          <Flex
            border="subtle"
            px="2"
            py="1"
            gap="2"
            rounded="xl"
            h="auto"
            w="auto"
            bg="sMutedBackground"
            align="center"
            _hover={{
              cursor: 'pointer'
            }}
          >
            <Icons.user size={14} />
            <Span>Person</Span>
          </Flex>
        </TabTrigger>
        <TabTrigger value="tab2">
          <Flex
            border="subtle"
            px="2"
            py="1"
            gap="2"
            rounded="xl"
            h="auto"
            w="auto"
            bg="sMutedBackground"
            align="center"
          >
            <Icons.building size={14} />
            <Span>Company</Span>
          </Flex>
        </TabTrigger>
        <TabTrigger value="tab3">
          <Flex
            border="subtle"
            px="2"
            py="1"
            gap="2"
            rounded="xl"
            h="auto"
            w="auto"
            bg="sMutedBackground"
            align="center"
          >
            <Icons.user size={14} />
            <Span>People</Span>
          </Flex>
        </TabTrigger>
      </TabsList>
      <TabContent value="tab1">Content 1</TabContent>
      <TabContent value="tab2">Content 2</TabContent>
      <TabContent value="tab3">Content 3</TabContent>
    </Tabs>
  )
}
