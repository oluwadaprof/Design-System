import { Meta, StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { Box } from '../layout'
import { Text } from '../text'
import { Collapsible } from './collapsible'
import { CollapsibleContent } from './collapsible-content'
import { CollapsibleTrigger } from './collapsible-trigger'

const meta: Meta = {
  title: 'Collapsible',
  component: Collapsible
}

export default meta

type CollapsibleStoryArgs = {
  defaultOpen: boolean
}

const Template: StoryFn<CollapsibleStoryArgs> = (args) => {
  const [open, setOpen] = useState(args.defaultOpen)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      style={{
        width: '20rem',
        border: '.1rem solid #ddd',
        borderRadius: '.8rem',
        padding: '.1rem'
      }}
    >
      <CollapsibleTrigger asChild>
        <Box mx="auto" cursor="pointer" py="2">
          <Text textAlign="center"> {open ? 'Show less' : 'Show more'}</Text>
        </Box>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Box border="subtle" p="2">
          This is the collapsible content. It can be expanded or collapsed.
        </Box>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const CollapsibleStory = Template.bind({})
