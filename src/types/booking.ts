import { TAvailability } from '@pulse-types/calendar'

import { TUser } from './user'

export type TBookingType = {
  id: string
  title: string
  slug: string
  description: string
  position: number
  conferencing?: string
  length: number
  active: boolean
  isDeleted: boolean
  minimumNotice: number
  minimumNoticeUnit: string
  requiresConfirmation: boolean
  afterEventBuffer: number
  afterEventBufferUnit: string
  bookingLimit: number
  periodType: 'range' | 'unlimited'
  periodStartDate: string
  periodEndDate: string
  periodOnlyBusinessDays: boolean
  createdAt: string
  updatedAt: string
  userId: string
  user: TUser
  accountId: string
  workspaceId: string
  availabilityId: string
  availability: TAvailability
  link?: TBookingLink
}

export type TBookingLink = {
  id: string
  domain: string
  key: string
  url: string
  archived: boolean
  expiresAt?: string
  password?: string
  externalId?: string
  proxy: boolean
  title?: string
  description?: string
  image?: string
  rewrite: boolean
  shortLink: string
  ios?: string
  tagNames?: string[]
  android?: string
  qrCode: string
}

export type TBooking = {
  accountId: string
  createdAt: string
  end: string
  id: string
  isDeleted: boolean
  eventId: string
  notes?: string
  name: string
  status: string
  email: string
  guests: string[]
  start: string
  timeZone: string
  updatedAt: string
  userId: string
  workspaceId: string
  bookingTypeId: string
  rescheduleId: string
  bookingType: TBookingType
}
