import { TooltipArrow } from '@radix-ui/react-tooltip'
import { Meta, StoryFn } from '@storybook/react'

import { Button } from '../button'
import { Tooltip } from './tooltip'
import { TooltipContent } from './tooltip-content'
import { TooltipProvider } from './tooltip-provider'
import { TooltipTrigger } from './tooltip-trigger'

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
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

type TooltipStoryArgs = {
  content: string
  side: 'top' | 'right' | 'bottom' | 'left'
}

const Template: StoryFn<TooltipStoryArgs> = (args) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button mx="auto" my="40">
          Hover me
        </Button>
      </TooltipTrigger>
      <TooltipContent side={args.side}>
        {args.content}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const TooltipStory = Template.bind({})
TooltipStory.args = {
  content: 'Tooltip content goes here',
  side: 'top'
}
