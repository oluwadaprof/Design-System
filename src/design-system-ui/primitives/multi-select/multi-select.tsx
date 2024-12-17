'use client'

import * as React from 'react'



import { Button } from '../button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../command'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Span } from '../text'
import { Icons } from '@design-system-ui/icons/base'
import { css, cx } from '@design-system-ui/styled-system/css'

type Props = {
  options: { value: string; label: string }[]
  placeholder?: string
  value: string[]
  setValue: (val: string[]) => void
  triggerClassname?: string
  contentClassname?: string
}

export function MultiSelectWithSearch({
  value,
  setValue,
  options,
  placeholder = 'Search option...',
  triggerClassname,
  contentClassname
}: Props) {
  const [selected, setSelected] = React.useState<Props['options']>([])
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          w="full"
          h="3.6rem"
          px="0.5rem"
          fontSize="1"
          fontWeight="normal"
          look="ghost"
          border="subtle"
          justifyContent="space-between"
          _focus={{
            border: 'focused'
          }}
          className={triggerClassname}
          role="combobox"
          aria-expanded={open}
        >
          <Span color={selected ? undefined : 'placeholder'}>
            {selected.length > 0 ? `${selected.length} item(s)` : placeholder}
          </Span>

          <Span ml="0.8rem" color="sAppMutedText">
            <Icons.caretDown />
          </Span>
        </Button>
      </PopoverTrigger>
      <PopoverContent w="full" p="0" className={contentClassname}>
        <Command className={css({ w: '100%', minW: '100%', p: '0' })}>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty className={css({ py: '2rem', pl: '1rem' })}>No option.</CommandEmpty>
          <CommandGroup className={css({ maxH: '25rem', overflowY: 'scroll' })}>
            {options.map((item) => (
              <CommandItem
                key={item.value}
                onSelect={() => {
                  setValue([...value, item.value])
                  setSelected([...selected, item])
                  setOpen(false)
                }}
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  px: '0.7rem'
                })}
              >
                {item.label}
                <Icons.check
                  className={cx(
                    css({
                      mr: '0.8rem',
                      h: '1.6rem',
                      w: '1.6rem',
                      opacity: value.includes(item.value.toLowerCase()) ? '1' : '0'
                    })
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
