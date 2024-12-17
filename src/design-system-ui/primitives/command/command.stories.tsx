import { Meta, StoryFn } from '@storybook/react'
import { CommandInput } from 'cmdk'
import { useState } from 'react'

import { Icons } from 'public/images/design-system-ui/icons/base'
import { css } from 'public/images/design-system-ui/styled-system/css'

import { Button } from '../button'
import { Center, Flex, HStack } from '../layout'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Span, Text } from '../text'
import { TooltipProvider } from '../tooltip'
import { Command } from './command'
import { CommandEmpty } from './command-empty'
import { CommandGroup } from './command-group'
import { CommandItem } from './command-item'

const meta: Meta = {
  title: 'Command',
  component: Command,
  argTypes: {
    isOpen: { control: 'boolean' },
    isSelect: { control: 'string' }
  }
}

export default meta

const items = ['ac', 'dc', 'bc']

type CommandStoryArgs = {
  isOpen: boolean
  isSelect: string
}

const Template: StoryFn<CommandStoryArgs> = (args) => {
  const [select, setSelect] = useState(args.isSelect)
  const [open, setOpen] = useState(args.isOpen)
  return (
    <TooltipProvider>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>
            <HStack gap="1">
              <Icons.kanban size={12} />
              <Span>{select ? select : 'pick'}</Span>
            </HStack>
          </Button>
        </PopoverTrigger>
        <PopoverContent w="30rem" rounded="xl" p="0" align="start">
          <Command className={css({ w: '100%', minW: '100%', p: '0' })}>
            <CommandInput placeholder="search ...." />
            <CommandEmpty className={css({ py: '2rem', pl: '1rem' })}>No option</CommandEmpty>
            <CommandGroup className={css({ maxH: '25rem', overflowY: 'scroll' })}>
              {items.map((item) => {
                return (
                  <CommandItem
                    key={item}
                    onSelect={() => {
                      setSelect(item)
                    }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    px="0.7rem"
                  >
                    <Flex gap="1" align="center">
                      <Center w="5" h="5" rounded="0.5rem" flexShrink="0">
                        <Text fontWeight="700" fontSize="1">
                          {item}
                        </Text>
                      </Center>
                    </Flex>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}

export const CommandStory = Template.bind({})
CommandStory.args = {
  isOpen: true,
  isSelect: 'pick'
}
