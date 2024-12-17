import { TEntity } from './entities'
import { TFilterCondition } from './filter'
import { TAccess, TSpace } from './spaces'
import { TUser } from './user'

export type TList = {
  id: string
  accessId: string
  access: TAccess
  name: string
  spaceId: string
  space: TSpace
  attributes: TListAttribute[]
  validationSchema: any
  views: TListView[]
  entity: TEntity
  entityId: string
  _count: {
    views: number
    records: number
  }
  createdAt: string
  userId: string
  user: Pick<TUser, 'id' | 'fullname' | 'firstname' | 'lastname' | 'profilePicture'>
  workspaceId: string
}

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
  email = 'email',
  phone = 'phone',
  url = 'url',
  boolean = 'boolean',
  smart = 'smart'
}

export type TSelectItem = {
  label: string
  value: string
  color?: string
  position?: string
}

export type TListView = {
  id: string
  name: string
  type: 'table' | 'pipeline'
  list: 'company' | 'person'
  sortField: string
  sortType: 'asc' | 'desc'
  filterType: 'and' | 'or'
  isDefault: boolean
  createdAt: string
  updatedAt: string
  workspaceId: string
  fields: TListViewField[]
  filters: TListViewFilter[]
  pipelineGroupById?: string
  pipelineGroupBy?: TListAttribute
}

export type TListAttribute = {
  id: string
  label: string
  icon: string
  description: string
  key: string
  prompt?: string
  position: string
  isPrimary: boolean
  isEditable: boolean
  isArchived: boolean
  isRequired: boolean
  type: TAttributeType
  options: TSelectItem[]
  filterConditions: TFilterCondition[]
  stages: TListAttributeStage[]
  metadata: Record<string, any>
  listId: string
}

export type TListAttributeStage = {
  id: string
  position: string
  name: string
  color: string
  confetti: boolean
  isCollapsed: boolean
  attributeId: string
}

export type TListViewFilter = {
  id: string
  condition: TFilterCondition
  value: string
  attribute: TListAttribute
}

export type TListViewField = {
  id: string
  isVisible: boolean
  isPinned: boolean
  position: number
  viewId: string
  attribute: TListAttribute
  attributeId: string
}

export type TListRecord = {
  id: string
  values: any
  entityRecordId: string
  createdAt: string
}

type TTemplatesOption = {
  color: string
  label: string
  value: string
}

type TTemplatesAttribute = {
  label: string
  key: string
  icon: string
  description: string
  isRequired: boolean
  isEditable: boolean
  isPrimary: boolean
  isVisible: boolean
  isSystem: boolean
  type: string
  filterConditions: string[]
  options: TTemplatesOption[]
  stages: any[]
}

type TTemplatesView = {
  name: string
  type: string
}

export type TemplatesCategoriesProps = {
  id: string
  name: string
  icon: string
}

export type TemplatesDataProps = {
  id: string
  name: string
  categoryId: string
  entitySlug: string
  description: string
  attributes: TTemplatesAttribute[]
  views: TTemplatesView[]
}

export type ITemplates = {
  categories: TemplatesCategoriesProps[]
  data: TemplatesDataProps[]
}
