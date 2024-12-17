'use client'

import * as React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'



import { Button, ButtonProps } from '../button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../command'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Span } from '../text'
import { css } from '@design-system-ui/styled-system/css'
import { ScrollableContainer } from '../scroll-area'
import { Icons } from '@design-system-ui/icons/base'

type Props = {
  options: { value: string; label: string }[]
  placeholder?: string
  value: string
  setValue: (val: string) => void
  defaultValue?: string
  triggerProps?: ButtonProps
  triggerClassName?: string
  contentClassName?: string
}

export const SelectWithSearch = (props: Props) => {
  const {
    options,
    placeholder = 'Select',
    value,
    setValue,
    defaultValue,
    triggerProps,
    triggerClassName,
    contentClassName
  } = props

  const val = defaultValue || value || ''
  const [selected, setSelected] = useState(options.find((opt) => opt.value === val)?.label || '')
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const val = defaultValue || value || ''

    if (val && !selected) {
      setSelected(options.find((opt) => opt.value === val)?.label || '')
    }
  }, [defaultValue])

  // Custom Filter
  const filteredResults = useMemo(() => {
    return options.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
  }, [options, search])

  useEffect(() => {
    if (!search.trim() && scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [search])

  return (
    <Popover
      open={open}
      onOpenChange={(value) => {
        setOpen(value)
        if (!value) setSearch('')
      }}
    >
      <PopoverTrigger asChild>
        <Button
          w="full"
          size="sm"
          look="form"
          fontSize="2"
          color={selected ? undefined : 'sFormPlaceholder'}
          _focus={{
            border: 'focused'
          }}
          role="combobox"
          aria-expanded={open}
          {...triggerProps}
          className={triggerClassName}
        >
          <Span>{selected || defaultValue || placeholder}</Span>
          <Icons.caretDown ml="2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="35rem" p="0" className={contentClassName} align="start">
        <Command shouldFilter={false} className={css({ w: '100%', minW: '100%', p: '0' })}>
          <CommandInput placeholder={placeholder} onValueChange={setSearch} />
          <CommandEmpty className={css({ py: '2rem', pl: '1rem' })}>No option.</CommandEmpty>
          <CommandList>
            <ScrollableContainer>
              <CommandGroup maxH="25rem" overflowY="scroll" ref={scrollRef}>
                {filteredResults?.map((item) => {
                  return (
                    <CommandItem
                      key={item.value}
                      onSelect={() => {
                        setValue(item.value)
                        setSelected(item.label)
                        setOpen(false)
                        setSearch('')
                      }}
                      size="xs"
                      mb="0.5"
                    >
                      {item.label}
                      <Icons.check
                        mr="2"
                        opacity={value === item.value.toLowerCase() ? '1' : '0'}
                      />
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </ScrollableContainer>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
