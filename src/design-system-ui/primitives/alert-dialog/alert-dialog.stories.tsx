import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../button'
import { TooltipProvider } from '../tooltip'
import { AlertDialog } from './alert-dialog'
import { AlertDialogAction } from './alert-dialog-action'
import { AlertDialogCancel } from './alert-dialog-cancel'
import { AlertDialogContent } from './alert-dialog-content'
import { AlertDialogDescription } from './alert-dialog-description'
import { AlertDialogFooter } from './alert-dialog-footer'
import { AlertDialogTitle } from './alert-dialog-title'

const meta: Meta = {
  title: 'AlertDialog',
  component: AlertDialog,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    isOpen: { control: 'boolean' }
  }
}

export default meta
type AlertDialogStoryArgs = {
  title: string
  description: string
  isOpen: boolean
}

const Template: StoryFn<AlertDialogStoryArgs> = (args) => {
  const [open, setOpen] = useState(args.isOpen)

  return (
    <TooltipProvider>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <Button mx="auto" my="40" onClick={() => setOpen(!open)}>
          open alert dialog
        </Button>
        <AlertDialogContent w="100rem" mt="4" p="4">
          <AlertDialogTitle>{args.title}</AlertDialogTitle>
          <AlertDialogDescription>{args.description}</AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Button>Action</Button>
            </AlertDialogAction>
            <AlertDialogCancel asChild>
              <Button>Cancel</Button>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TooltipProvider>
  )
}

export const AlertDialogStory = Template.bind({})
AlertDialogStory.args = {
  title: 'Alert Dialog',
  isOpen: true,
  description: 'I am Batman'
}
