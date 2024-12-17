import { Meta } from '@storybook/react'
import { useState } from 'react'

import { Icons } from 'public/images/design-system-ui/icons/base'

import { Button } from '../button'
import { Box } from '../layout'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { TooltipProvider } from '../tooltip'
import { IconPicker } from './icon-picker'

const meta: Meta = {
  title: 'Icons',
  component: IconPicker
}

export default meta

const Template = () => {
  const [open, onOpenChange] = useState<boolean>(false)

  return (
    <Box>
      <TooltipProvider>
        <Popover open={open} onOpenChange={onOpenChange}>
          <PopoverTrigger asChild>
            <Button>Trigger</Button>
          </PopoverTrigger>
          <PopoverContent w="32rem" mx="2.5">
            <Icons.add />
          </PopoverContent>
        </Popover>
      </TooltipProvider>
    </Box>
  )
}

export const IconPickerStory = Template.bind({})
