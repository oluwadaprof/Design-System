import { TEvent } from './calendar'
import { TCompany } from './company'
import { TFile } from './files'
import { TFilterCondition } from './filter'
import { TList } from './lists'
import { TNote } from './notes'
import { TPerson } from './person'
import { TTask } from './tasks'
import { TUser } from './user'

export type TEntity = {
  id: string
  name: string
  singularNoun: string
  color: string
  slug: string
  type: 'standard' | 'custom'
  icon: string
  attributes: TEntityAttribute[]
  validationSchema: any
  primaryAttribute?: TEntityAttribute
  primaryAttributeId?: string
  allowedViewTypes: string[]
  _count: {
    records: number
  }
}

export type TNativeField = keyof TCompany | keyof TPerson

export enum TAttributeType {
  text = 'text',
  number = 'number',
  checkbox = 'checkbox',
  currency = 'currency',
  date = 'date',
  timestamp = 'timestamp',
  rating = 'rating',
  status = 'status',
  select = 'select',
  record = 'record',
  user = 'user',
  location = 'location',
  domain = 'domain',
  email = 'email',
  phone = 'phone',
  url = 'url',
  boolean = 'boolean',
  country = 'country',
  industry = 'industry',
  relationship = 'relationship',
  smart = 'smart'
}

export type TSelectItem = {
  label: string
  value: string
  color?: string
  position?: string
}

export type TEntityView = {
  id: string
  name: string
  type: 'table' | 'pipeline'
  entity: 'company' | 'person'
  sortField: string
  sortType: 'asc' | 'desc'
  filterType: 'and' | 'or'
  isDefault: boolean
  createdAt: string
  updatedAt: string
  workspaceId: string
  fields: TEntityViewField[]
  filters: TEntityViewFilter[]
  pipelineGroupById?: string
  pipelineGroupBy?: TEntityAttribute
  aggregateAttributeId?: string
  aggregateAttribute?: TEntityAttribute
  aggregate?: string
  aggregateValue?: {
    result: number
  }
}

export type TEntityAttribute = {
  id: string
  label: string
  icon: string
  description: string
  key: string
  position: string
  isPrimary: boolean
  isEditable: boolean
  isRequired: boolean
  isSystem: boolean
  isEnriched: boolean
  isArchived: boolean
  isUnique: boolean
  showDuringCreate: boolean
  prompt: string
  entityId: string
  type: TAttributeType
  options: TSelectItem[]
  filterConditions: TFilterCondition[]
  stages: TEntityAttributeStage[]
  aggregate?: string
  aggregateValue?: {
    result: number
  }
  metadata: Record<string, any>
}

export type TEntityAttributeStage = {
  id: string
  position: string
  name: string
  color: string
  confetti: boolean
  isCollapsed: boolean
  attributeId: string
  createdAt: string
  updatedAt: string
}

export type TEntityViewFilter = {
  id: string
  condition: TFilterCondition
  value: string
  attribute: TEntityAttribute
}

export type TEntityViewField = {
  id: string
  isVisible: boolean
  isPinned: boolean
  position: number
  viewId: string
  attribute: TEntityAttribute
  attributeId: string
}

export type TEntityRecord = {
  id: string
  values: any
  createdAt: string
  uniqueId: string
  threadAccessId: string
  entityId: string
  entity: TEntity
  workspaceId: string
  listRecords: TEntityListRecord[]
  _count: {
    comments: number
    threads: number
    events: number
    notes: number
    tasks: number
    listRecords: number
    files: number
    folders: number
  }
}

export type TEntityListRecord = {
  listId: string
  list: TList
  entityRecordId: string
  entityRecord: TEntityRecord
  userId: string
  workspaceId: string
  createdAt: string
}

export type TEntityRecordActivity = {
  id: string
  action: string
  type: 'event' | 'note' | 'task' | 'file' | 'system'
  entityRecordId: string
  note: TNote | null
  noteId: string | null
  task: TTask | null
  taskId: string | null
  event: TEvent | null
  eventId: string | null
  file: TFile | null
  fileId: string | null
  createdAt: string
  updatedAt: string
  userId: string
  user: Pick<TUser, 'firstname' | 'lastname' | 'fullname' | 'profilePicture'>
}
