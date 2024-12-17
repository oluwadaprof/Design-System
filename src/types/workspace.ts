import { TAsset } from './asset'

export type TWorkspace = {
  id: string
  name: string
  domain: string
  logoId: string | null
  logo: TAsset | null
  createdAt: string
  onboardingInfo: {
    name: string
    teamSize: string
    country: string
    primaryUse: string[]
  }
  billingInfo?: {
    city: string
    companyName: string
    countryCode: string
    emailAddress: string
    line1: string
    line2?: string
    postalCode: string
    state: string
  }
  _count: {
    cards: number
    lists: number
    tasks: number
    users: number
    notes: number
    accounts: number
  }
}

export type TWorkspaceLimits = {
  creditLimit: {
    totalActiveCredits: number
    totalUsageCount: number
  }
  seatLimit: {
    totalSeats: number
    usedSeats: number
  }
}

export type IOnboardingEventTracker = {
  timeSpentOnSteps: number
  totalTimeSpentOnSteps?: number
  handleTimeChange?: (step: string) => void
}
