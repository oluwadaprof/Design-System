import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button'
import { TooltipProvider } from '../tooltip'
import { Dialog } from './dialog'
import { DialogContent } from './dialog-content'
import { DialogDescription } from './dialog-description'
import { DialogTitle } from './dialog-title'
import { DialogTrigger } from './dialog-trigger'

const meta: Meta = {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    isOpen: { control: 'boolean' }
  }
}

export default meta

type DialogStoryArgs = {
  title: string
  description: string
  isOpen: boolean
}

const Template: StoryFn<DialogStoryArgs> = (args) => {
  const [open, setOpen] = useState(args.isOpen)

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button mx="auto" my="40" onClick={() => setOpen(!open)}>
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent w="100rem" mt="4" p="4">
          <DialogTitle>{args.title}</DialogTitle>
          <DialogDescription>{args.description}</DialogDescription>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
}

export const DialogStory = Template.bind({})
DialogStory.args = {
  title: 'Dialog Title',
  description: 'Dialog description goes here.',
  isOpen: true
}
