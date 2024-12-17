import { TAccount } from './account'

export type TEvent = {
  id: string
  externalId: string
  eTag: string
  title: string
  summary: string
  description: string
  location: string
  organizer: string
  isOrganizedByMe: boolean
  createdBy: string
  isCreatedByMe: boolean
  start: string
  startTimeZone: string
  end: string
  endTimeZone: string
  status: 'confirmed' | 'tentative' | 'cancelled'
  htmlLink: string
  created: string
  updated: string
  isAllDay: boolean
  recurrence: string[]
  reminders?: {
    useDefault?: boolean
    overrides?: {
      method?: string
      minutes?: number
    }[]
  }
  recurringEventId: string
  conferenceData: {
    conferenceId: string
    entryPoints: {
      entryPointType: string
      uri: string
      label: string
    }[]
    conferenceSolution: {
      key: {
        type: string
      }
      name: string
      iconUri: string
    }
  }
  attendees: {
    email: string
    responseStatus?: string
    organizer?: boolean
  }[]
  guestsCanInviteOthers: boolean
  guestsCanModify: boolean
  guestsCanSeeOtherGuests: boolean
  accountId?: string
  account?: Partial<TAccount>
  eventAnalysis?: TEventAnalysis
}

export type TAvailability = {
  accountId: string
  createdAt: string
  schedule: {
    start: string
    end: string
  }[][]
  id: string
  name: string
  timeZone: string
  updatedAt: string
  userId: string
  workspaceId: string
  isDefault: boolean
}

export type TNoteTakerPreference = {
  id: string
  joinTeamMeeting: boolean
  joinExternalMeeting: boolean
  joinHostedMeeting: boolean
  sendToSelf: boolean
  sendToAttendees: boolean
  createdAt: string
  updatedAt: string
  workspaceId: string
  userId: string
}

export type TTimestamp = {
  startTimestamp: number
  endTimestamp: number
}

export type TWord = {
  text: string
} & TTimestamp

export type TTranscriptEntry = {
  speaker: string
  words: TWord[]
}

export interface TEventAnalysis {
  id: string
  botId: string
  transcript: TTranscriptEntry[]
  summary: string
  keywords: string[]
  createdAt: string
  updatedAt: string
  workspaceId: string
  eventId: string
  actionItems: string[]
}

export type TEventSummary = {
  id: string
  summary: string
  endOfWeekDate: string
  createdAt: string
  updatedAt: string
  userId: string
  accountId: string
  workspaceId: string
  insights: {
    summary: string
    categories: {
      category: string
      percentage: number
      label: string
      duration: string
      color: string
    }[]
    totalEventDuration: number
    percentageOfTimeSpentInMeetings: number
    noOfMeetingsUnder30m: number
    percentageOfMeetingsUnder30m: number
    noOfMeetingsBetween30mAnd1h: number
    percentageOfMeetingsBetween30mAnd1h: number
    noOfMeetingsAbove1h: number
    percentageOfMeetingsAbove1h: number
  }
}
