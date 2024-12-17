'use client'

import { format, getUnixTime, isSameWeek } from 'date-fns'
import * as React from 'react'
import {
  CaptionProps,
  Day,
  DayPicker,
  RowProps,
  WeekNumber,
  useDayPicker,
  useNavigation
} from 'react-day-picker'



import { Button, buttonStyle } from '../button'
import { Heading } from '../text'
import { Flex, HStack, styled } from '@design-system-ui/styled-system/jsx'
import { Icons } from '@design-system-ui/icons/base'
import { css, cx } from '@design-system-ui/styled-system/css'

const Tr = styled.tr
const Td = styled.td

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  highlightRow?: boolean
  classNames?: {
    month?: string
    months?: string
    caption?: string
    caption_label?: string
    nav?: string
    nav_button?: string
    nav_button_previous?: string
    nav_button_next?: string
    head_row?: string
    head_cell?: string
    table?: string
    row?: string
    cell?: string
    day?: string
    day_selected?: string
    day_today?: string
    day_outside?: string
    day_disabled?: string
    day_range_middle?: string
    day_hidden?: string
  }
}

const CustomRow = ({ selected, ...props }: RowProps & { selected: Date }) => {
  const { styles, classNames, showWeekNumber, components } = useDayPicker()
  const sameWeek = isSameWeek(new Date(selected), new Date(props.dates[0]))

  const DayComponent = components?.Day ?? Day
  const WeeknumberComponent = components?.WeekNumber ?? WeekNumber

  let weekNumberCell
  if (showWeekNumber) {
    weekNumberCell = (
      <td className={classNames.cell} style={styles.cell}>
        <WeeknumberComponent number={props.weekNumber} dates={props.dates} />
      </td>
    )
  }

  return (
    <Tr
      className={classNames.row}
      style={styles.row}
      bg={sameWeek ? 'sMutedBackground' : 'transparent'}
    >
      {weekNumberCell}
      {props.dates.map((date) => {
        return (
          <Td
            className={classNames.cell}
            style={styles.cell}
            key={getUnixTime(date)}
            role="presentation"
          >
            <DayComponent date={date} displayMonth={props.displayMonth} />
          </Td>
        )
      })}
    </Tr>
  )
}

export const CustomCaption = (props: CaptionProps) => {
  const { goToMonth, nextMonth, previousMonth } = useNavigation()

  return (
    <Flex className="caption" align="center" justify="space-between" mb="1" px="1">
      <Heading as="h5" fontSize="1" fontWeight="500">
        {format(props.displayMonth, 'MMM yyy')}
      </Heading>
      <HStack gap="1.5">
        <Button
          size="auto"
          p="1.5"
          rounded="md"
          look="grayOutline"
          disabled={!previousMonth}
          onClick={() => previousMonth && goToMonth(previousMonth)}
        >
          <Icons.caretLeft size={12} />
        </Button>
        <Button
          size="auto"
          p="1.5"
          rounded="md"
          look="grayOutline"
          disabled={!nextMonth}
          onClick={() => nextMonth && goToMonth(nextMonth)}
        >
          <Icons.caretRight size={12} />
        </Button>
      </HStack>
    </Flex>
  )
}

const Calendar = ({
  className,
  classNames = {},
  highlightRow = false,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  const {
    months,
    month,
    caption,
    caption_label,
    nav,
    nav_button,
    nav_button_previous,
    nav_button_next,
    head_row,
    head_cell,
    table,
    row,
    cell,
    day,
    day_selected,
    day_today,
    day_outside,
    day_disabled,
    day_range_middle,
    day_hidden
  } = classNames

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cx('p-3', className)}
      classNames={{
        months: cx(css({ display: 'flex', flexDir: 'column' }), months),
        month: cx(css({}), month),
        caption: cx(
          css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: '4px',
            mb: '2rem'
          }),
          caption
        ),
        caption_label: cx(css({ fontWeight: '500', fontSize: '2' }), caption_label),
        nav: cx(css({ display: 'flex', alignItems: 'center' }), nav),
        nav_button: cx(
          cx(
            buttonStyle({ look: 'grayOutline', size: 'auto' }),
            css({
              h: '2.8rem !important',
              w: '2.8rem !important',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: '0',
              opacity: '0.5',
              _hover: { opacity: '1' }
            })
          ),
          nav_button
        ),
        nav_button_previous: cx(css({ pos: 'absolute', left: '1rem' }), nav_button_previous),
        nav_button_next: cx(css({ pos: 'absolute', right: '1rem' }), nav_button_next),
        table: cx(css({ w: '100%', borderCollapse: 'collapse' }), table),
        head_row: cx(
          css({
            h: '3rem',
            rounded: 'md',
            display: 'flex',
            alignItems: 'center',
            w: '100%',
            gap: '1'
          }),
          head_row
        ),
        head_cell: cx(css({ flex: '1', rounded: 'xl', fontSize: '1' }), head_cell),
        row: cx(
          css({
            py: '3px',
            rounded: 'lg',
            display: 'flex',
            alignItems: 'center',
            w: '100%',
            mt: '1',
            gap: '1'
          }),
          row
        ),
        cell: cx(
          css({
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: '1',
            p: '0',
            pos: 'relative',
            m: '0 !important',
            mx: '0 !important',
            marginInline: '0 !important',

            _focusWithin: {
              pos: 'relative'
            }
          }),
          cell
        ),
        day: cx(
          buttonStyle({ look: 'transparent', size: 'auto' }),
          css({
            h: '2.8rem !important',
            w: '2.8rem !important',
            p: '0',
            px: '0',
            justifyContent: 'center',
            alignItems: 'center',
            rounded: 'md',

            _hover: {
              bg: 'sMutedBackground !important'
            }
          }),
          day
        ),
        day_selected: cx(
          css({
            bg: 'sPrimaryAlpha.9 !important',
            color: 'gray.1 !important',

            _hover: { bg: 'sPrimaryAlpha.9 !important', color: 'gray.1' },
            _focus: { bg: 'sPrimaryAlpha.9 !important', color: 'gray.1' }
          }),
          day_selected
        ),
        day_today: cx(css({ color: 'sAppPrimaryText', fontWeight: '500' }), day_today),
        day_outside: cx(css({ opacity: '0.5' }), day_outside),
        day_disabled: cx(css({ opacity: '0.5' }), day_disabled),
        day_range_middle: cx(
          css({ '&[aria-selected]': { bg: 'sMutedBackground' } }),
          day_range_middle
        ),
        day_hidden: cx(css({ visibility: 'hidden' }), day_hidden)
      }}
      components={{
        IconLeft: () => <Icons.caretLeft size={14} />,
        IconRight: () => <Icons.caretRight size={14} />,
        Caption: CustomCaption,
        Row: highlightRow
          ? (childProps) => (
              <CustomRow
                {...{
                  ...childProps,
                  selected: props.selected?.valueOf() as Date
                }}
              />
            )
          : undefined
      }}
      {...props}
    />
  )
}

export { Calendar }
