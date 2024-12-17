import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button'
import { TooltipProvider } from '../tooltip'
import { Popover } from './popover'
import { PopoverContent } from './popover-content'
import { PopoverTrigger } from './popover-trigger'

const meta: Meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {
    content: { control: 'text' },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type PopoverStoryArgs = {
  content: string
  side: 'top' | 'right' | 'bottom' | 'left'
}

const Template: StoryFn<PopoverStoryArgs> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <TooltipProvider>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button mx="auto" my="40" onClick={() => setOpen(!open)}>
            Click me
          </Button>
        </PopoverTrigger>
        <PopoverContent side={args.side}>{args.content}</PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}

export const PopoverStory = Template.bind({})
PopoverStory.args = {
  content: 'Popover content goes here',
  side: 'top'
}
