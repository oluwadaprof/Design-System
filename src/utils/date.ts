import {
  differenceInMinutes,
  format,
  formatDistanceToNow,
  formatDuration,
  formatRelative,
  parse,
  parseISO
} from 'date-fns'
import { getTimezoneOffset } from 'date-fns-tz'

export const formatDate = (date: string | Date, formatString: string) => {
  if (!date) return ''

  const parsedDate = new Date(date)

  // Check if the date is valid
  if (isNaN(parsedDate.getTime())) {
    return 'Invalid date'
  }

  return format(parsedDate, formatString)
}

export const formatRelativeDate = (date: string, baseDate = new Date()) => {
  return formatRelative(new Date(date), baseDate)
}

export const formatDistanceDate = (date: string, addSuffix = false) => {
  return formatDistanceToNow(new Date(date), { addSuffix })
}

export const formatTimeDifference = (startDate: string, endDate: string) => {
  const start = parseISO(startDate)
  const end = parseISO(endDate)
  const diffMinutes = differenceInMinutes(end, start)
  const hours = Math.floor(diffMinutes / 60)
  const minutes = diffMinutes % 60

  if (hours === 0) {
    return `${minutes}m`
  } else {
    return `${hours}hr ${minutes}m`
  }
}

export const formatDurationToTime = (duration: number) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  const formattedTime = formatDuration({
    hours: hours,
    minutes: minutes,
    seconds: 0
  })

  return formattedTime
}

export const convertAmPmTo24Hour = (time: string) => {
  const parsedTime = parse(time, 'h:mm a', new Date())
  return format(parsedTime, 'HH:mm')
}

export const convertTimeToISOString = (time: string, dateTime?: Date, timeFormat?: string) => {
  if (!time) return '' // Return empty string if timeString is empty
  const [hours, minutes] =
    timeFormat === 'h:mm a' ? convertAmPmTo24Hour(time).split(':') : time.split(':')

  const date = dateTime ?? new Date()
  date.setUTCHours(parseInt(hours, 10))
  date.setUTCMinutes(parseInt(minutes, 10))
  date.setUTCSeconds(0)
  return date.toISOString()
}

export const convertISOStringToHHMM = (isoString: string) => {
  if (isoString) {
    const date = parseISO(isoString)
    const hours = date.getUTCHours().toString().padStart(2, '0') // Get hours and pad with leading zero if needed
    const minutes = date.getUTCMinutes().toString().padStart(2, '0') // Get minutes and pad with leading zero if needed
    return `${hours}:${minutes}`
  }
  return ''
}

// This function will return the timezone offset in hours between UTC and the specified timezone.
export const calcTimezoneOffset = (timezone: string, date: Date) => {
  return getTimezoneOffset(timezone, date) / 3600000
}

export const formatTimeZoneOffset = (offset: number) => {
  const sign = offset >= 0 ? '+' : '-'
  const hours = Math.floor(Math.abs(offset))
  const minutes = (Math.abs(offset) % 1) * 60
  return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}
