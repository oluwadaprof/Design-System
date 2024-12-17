'use client'

import { CalendarOptions, CustomContentGenerator, EventContentArg } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import React from 'react'



import { Box } from '../layout'
import { BoxProps } from '@design-system-ui/styled-system/jsx'

type Props = CalendarOptions & {
  view?: 'timeGridDay' | 'timeGridWeek' | 'dayGridMonth'
  renderEventContent?: CustomContentGenerator<EventContentArg>
  wrapperStyles?: BoxProps
}

export const FullCalendarGrid = React.forwardRef<
  React.ElementRef<typeof FullCalendar>,
  React.ComponentPropsWithoutRef<typeof FullCalendar> & Props
>(function FullCalendarGrid({ events, renderEventContent, view, wrapperStyles, ...rest }, ref) {
  return (
    <Box
      {...wrapperStyles}
      css={{
        '& .fc': {
          '--fc-border-color': 'token(colors.sGrayAlpha.3) !important',
          '--fc-today-bg-color':
            view === 'timeGridDay'
              ? 'transparent !important'
              : 'token(colors.sGrayAlpha.2) !important',
          '--fc-event-bg-color': 'transparent !important',
          '--fc-event-border-color': 'transparent !important',
          '--fc-button-bg-color': 'transparent !important',

          '& .fc-scrollgrid': {
            rounded: 'xl'
          },

          '& .fc-col-header-cell': {
            fontSize: '1 !important',
            fontWeight: '500',
            color: 'sAppMutedText',

            '&.fc-day-today': {
              color: 'sAppText'
            }
          },

          '& .fc-timegrid-slot': {
            height: '2.5em !important'
          },

          '& .fc-scrollgrid-shrink-cushion': {
            fontSize: '1 !important',
            fontWeight: '500',
            color: 'sAppMutedText'
          },

          '& .fc-timegrid-slot-label-cushion': {
            fontSize: '1 !important',
            fontWeight: '500',
            color: 'sAppMutedText'
          },

          '& .fc-scrollgrid-section': {
            '& th:first-of-type': {
              borderTopRightRadius: 'xl'
            }
          },

          '& .fc-timegrid-event .fc-event-main': {
            padding: 'none !important'
          },

          '& .fc-timegrid-event-harness-inset .fc-timegrid-event, .fc-timegrid-event.fc-event-mirror, .fc-timegrid-more-link':
            {
              shadow: 'none !important'
            }
        },
        ...wrapperStyles?.css
      }}
    >
      <FullCalendar
        ref={ref}
        events={events}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={view}
        eventContent={renderEventContent}
        headerToolbar={false}
        {...rest}
      />
    </Box>
  )
})
