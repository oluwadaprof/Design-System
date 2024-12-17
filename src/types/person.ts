import { TAttributeType, TSelectItem } from './entities'
import { TFilterCondition } from './filter'

export type TPerson = {
  id: string
  firstname: string
  lastname: string
  email: string
  country: string
  state: string
  city: string
  jobTitle: string
  facebook: string
  instagram: string
  linkedin: string
  twitter: string
  firstCalendarInteraction: string | Date
  firstEmailInteraction: string | Date
  lastCalendarInteraction: string | Date
  lastEmailInteraction: string | Date
  nextCalendarInteraction: string | Date
  connectionStrength: number
  workspaceId: string
  _count: {
    comments: number
    threads: number
    events: number
    notes: number
    tasks: number
  }
  recordType: 'company' | 'person'
}

type TNativeField = keyof TPerson

export type TPersonAttribute = {
  id: string
  label: string
  icon: string
  isPrimary: boolean
  isEditable: boolean
  nativeField: TNativeField
  type: TAttributeType
  options: TSelectItem[] | null
  filterConditions: TFilterCondition[]
}
