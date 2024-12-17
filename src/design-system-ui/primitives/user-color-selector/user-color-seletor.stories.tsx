import { Meta } from '@storybook/react'
import { useState } from 'react'

import { Box } from '../layout'
import { TooltipProvider } from '../tooltip'
import { UserColorSelector } from './user-color-selector'

const meta: Meta = {
  title: 'User Color Selector',
  component: UserColorSelector
}

export default meta

const Template = () => {
  const [selectColor, setSelectedColor] = useState<string>('')

  const handleColor = (color: string) => {
    setSelectedColor(color)
  }

  return (
    <TooltipProvider>
      <Box border="subtle" rounded="sm" px="4">
        <UserColorSelector color={selectColor} setColor={handleColor} />
        {selectColor && <Box mt="4">Select Color : {selectColor}</Box>}
      </Box>
    </TooltipProvider>
  )
}

export const UserColorSelectorStory = Template.bind({})
