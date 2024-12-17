import { ContextMenuGroup } from '@radix-ui/react-context-menu'
import { Meta, StoryFn } from '@storybook/react'

import { css } from 'public/images/design-system-ui/styled-system/css'

import { Box } from '../layout'
import { ContextMenu } from './context-menu'
import { ContextMenuContent } from './context-menu-content'
import { ContextMenuItem } from './context-menu-item'
import { ContextMenuPortal } from './context-menu-portal'
import { ContextMenuSeparator } from './context-menu-separator'
import { ContextMenuSub } from './context-menu-sub'
import { ContextMenuSubContent } from './context-menu-sub-content'
import { ContextMenuSubTrigger } from './context-menu-sub-trigger'
import { ContextMenuTrigger } from './context-menu-trigger'

const meta: Meta = {
  title: 'Context Menu',
  component: ContextMenu
}

export default meta

const items = ['copy', 'paste', 'cut', 'move']

const Template: StoryFn = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuContent className={css({ w: '20rem', minW: '100%', p: '2' })}>
            <ContextMenuGroup>
              {items.map((item, index) => {
                return <ContextMenuItem key={index}>{item}</ContextMenuItem>
              })}
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>Switch</ContextMenuSubTrigger>
                <ContextMenuPortal>
                  <ContextMenuSubContent className={css({ w: '20rem', minW: '100%', p: '2' })}>
                    <ContextMenuItem>List</ContextMenuItem>
                    <ContextMenuItem>Board</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuPortal>
              </ContextMenuSub>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenuPortal>
        <Box h="10rem" w="15rem" bgColor="black"></Box>
      </ContextMenuTrigger>
    </ContextMenu>
  )
}

export const ContextStory = Template.bind({})
