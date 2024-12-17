import { Meta, StoryFn } from '@storybook/react'

import { Avatar } from '../avatar'
import { Button } from '../button'
import { Box } from '../layout'
import { NextLink } from '../link'
import { TooltipProvider } from '../tooltip'
import { HoverCard } from './hover-card'
import { HoverCardContent } from './hover-card-content'
import { HoverCardTrigger } from './hover-card-trigger'

const meta: Meta = {
  title: 'Hover Card',
  component: HoverCard,
  argTypes: {
    description: { control: 'text' }
  }
}

export default meta

type HoverCardStoryArgs = {
  title: string
  description: string
}

const Template: StoryFn<HoverCardStoryArgs> = (args) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <TooltipProvider>
          <Button size="auto" look="transparent" rounded="full" py="0.5" px="1" alignItems="center">
            <Avatar size="xxs" shape="md" name="Aiden Pearce"></Avatar>
            <Box lineHeight="initial !important" mt="1px">
              <NextLink
                justifyContent="flex-start"
                look="ghost"
                size="auto"
                href=""
                textTransform="capitalize"
                fontWeight="400"
                _hover={{ textDecoration: 'none' }}
              >
                blink
              </NextLink>
              <Box mt="1px" w="full" h="1px" bg="sMutedBackground" />
            </Box>
          </Button>
        </TooltipProvider>
      </HoverCardTrigger>
      <HoverCardContent w="38rem" side="bottom" align="start">
        {args.description}
      </HoverCardContent>
    </HoverCard>
  )
}
export const HoverCardStory = Template.bind({})
HoverCardStory.args = {
  title: 'Hover Story',
  description: 'Hover'
}
