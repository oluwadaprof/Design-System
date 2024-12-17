import type { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { formatRelativeDate } from '@pulse-utils/date'

import { Button } from '../button'
import { TooltipProvider } from '../tooltip'
import { DatePicker } from './date-picker'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Date Picker'
}
export default meta

const Template: StoryFn = () => {
  const [selectDate, setSelectedDate] = useState<Date>()
  const [open, openChange] = useState(false)

  const pickDate = (selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate)
  }

  const display = selectDate ? formatRelativeDate(new Date(selectDate).toISOString()) : 'pick date'

  return (
    <TooltipProvider>
      <DatePicker
        open={open}
        onOpenChange={(val) => {
          openChange(val)
        }}
        date={selectDate}
        setDate={pickDate}
        triggerChildren={<Button onClick={() => openChange(true)}>{display}</Button>}
      />
    </TooltipProvider>
  )
}

export const DatePickerStory = Template.bind({})
