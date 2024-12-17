import { Meta, StoryFn } from '@storybook/react'

import { Button } from '../button'
import { TooltipProvider } from '../tooltip'
import { DropdownMenu } from './dropdown-menu'
import { DropdownMenuContent } from './dropdown-menu-content'
import { DropdownMenuItem } from './dropdown-menu-item'
import { DropdownMenuTrigger } from './dropdown-menu-trigger'

const meta: Meta = {
  title: 'DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    triggerLabel: { control: 'text' },
    menuItem1: { control: 'text' },
    menuItem2: { control: 'text' },
    menuItem3: { control: 'text' },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type DropdownMenuStoryArgs = {
  triggerLabel: string
  menuItem1: string
  menuItem2: string
  menuItem3: string
  side: 'top' | 'right' | 'bottom' | 'left'
}

const Template: StoryFn<DropdownMenuStoryArgs> = (args) => {
  return (
    <TooltipProvider>
      <DropdownMenu {...args}>
        <DropdownMenuTrigger asChild>
          <Button mx="auto" my="40">
            {args.triggerLabel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side={args.side}>
          <DropdownMenuItem onSelect={() => alert(args.menuItem1)}>
            {args.menuItem1}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert(args.menuItem2)}>
            {args.menuItem2}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert(args.menuItem3)}>
            {args.menuItem3}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  )
}

export const DropdownMenuStory = Template.bind({})
DropdownMenuStory.args = {
  triggerLabel: 'Open Menu',
  menuItem1: 'Menu Item 1',
  menuItem2: 'Menu Item 2',
  menuItem3: 'Menu Item 3',
  side: 'bottom'
}
