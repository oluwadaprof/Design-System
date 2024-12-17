'use client'

import { addDays } from 'date-fns'
import * as React from 'react'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'



import { Calendar, CalendarProps } from '../calendar'
import { Box } from '../layout'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'
import { css } from '@design-system-ui/styled-system/css'

type Props = {
  date?: Date
  setDate: (val?: Date) => void
  triggerChildren: React.ReactNode
  showPresets?: boolean
  disabled?: boolean
  open: boolean
  onOpenChange: (val: boolean) => void
  calendarProps?: Omit<CalendarProps, 'onSelect'>
}

export const DatePicker = (props: Props) => {
  const ref = useRef(null)
  const {
    date,
    setDate,
    triggerChildren,
    showPresets,
    disabled,
    open,
    onOpenChange,
    calendarProps
  } = props

  useOnClickOutside(ref, () => {
    onOpenChange(false)
  })

  const presetStyles = css({
    fontSize: '2',
    py: '0.4rem'
  })

  const handleSelect = (val?: Date) => {
    setDate(val)
    onOpenChange(false)
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger disabled={disabled} asChild>
        {triggerChildren}
      </PopoverTrigger>
      <PopoverContent
        w="auto"
        display="flex"
        flexDir="column"
        align="start"
        columnGap="8px"
        p="8px"
        ref={ref}
      >
        {showPresets && (
          <Select onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}>
            <SelectTrigger size="sm" border="subtle" mb="1.4rem">
              <SelectValue placeholder="Select" />
            </SelectTrigger>

            <SelectContent position="popper">
              <SelectItem className={presetStyles} value="0">
                Today
              </SelectItem>
              <SelectItem className={presetStyles} value="1">
                Tomorrow
              </SelectItem>
              <SelectItem className={presetStyles} value="3">
                In 3 days
              </SelectItem>
              <SelectItem className={presetStyles} value="7">
                In a week
              </SelectItem>
            </SelectContent>
          </Select>
        )}

        <Box rounded="xl">
          <Calendar {...calendarProps} mode="single" selected={date} onSelect={handleSelect} />
        </Box>
      </PopoverContent>
    </Popover>
  )
}
