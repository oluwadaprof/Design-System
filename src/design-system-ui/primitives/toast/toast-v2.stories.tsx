import { Meta, StoryFn } from '@storybook/react'

import { Button } from '../button'
import { TooltipProvider } from '../tooltip'
import { ToasterV2, toastV2 } from './toast'

const meta: Meta = {
  title: 'Toaster',
  component: ToasterV2,
  argTypes: {
    message: { control: 'text' },
    type: {
      options: ['info', 'success', 'warning', 'error'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type ToastTypeArgs = {
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
}

const Template: StoryFn<ToastTypeArgs> = (args) => {
  const showToast = () => {
    const toastFunction = toastV2[args.type]
    toastFunction(args.message)
  }

  return (
    <div>
      <ToasterV2 />
      <TooltipProvider>
        <Button onClick={showToast}>Show Toast</Button>
      </TooltipProvider>
    </div>
  )
}

export const ToastStory = Template.bind({})
ToastStory.args = {
  message: 'This is a message',
  type: 'success'
}
