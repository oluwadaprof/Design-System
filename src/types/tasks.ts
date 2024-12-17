import { TFilterCondition } from './filter'
import { TUser } from './user'

export type TAssignee = {
  userId: string
  taskId: string
  createdAt: string
  updatedAt: string
  user: TUser
}

export type TTag = {
  id: string
  name: string
  color: string
  workspaceId: string
  userId: string
}

export type TTaskTag = {
  tag: {
    id: string
    name: string
    color: string
    workspaceId: string
    userId: string
  }
  tagId: string
}

export type TTask = {
  id: string
  title: string
  description: string
  dueDate: string
  priority: string
  type: string
  status: TTaskStatus
  statusId: string
  userId: string
  workspaceId: string
  createdAt: string
  updatedAt: string
  assignees: TAssignee[]
  tags: TTaskTag[]
  projectId: string
  project: TTaskProject
  _count: {
    attachments: number
    comments: number
    subTasks: number
    tags: number
  }
  attachments: TTaskAttachment[]
  parentTaskId: string | null
  parentTask: TTask | null
  subTasks: TTask[]
  records: {
    recordId: string
  }[]
}

export type TTaskStatus = {
  id: string
  position: string
  name: string
  color: string
  confetti: boolean
  isCollapsed: boolean
  workspaceId: string
  createdAt: string
  updatedAt: string
  projectId: string
  project: TTaskProject
  closed: boolean
}

export type TTaskProject = {
  id: string
  title: string
  icon: string
  emoji: string
  filterType: 'and' | 'or'
  filters: TTaskProjectFilter[]
  _count: {
    tasks: number
  }
  isDefault: boolean
  user: TUser
  createdAt: string
  statuses: TTaskStatus[]
}

export type TTaskProjectSort = {
  id: string
  sortField: string
  sortType: 'asc' | 'desc'
  project: TTaskProject
  projectId: string
}

export type TTaskProjectFilter = {
  id: string
  field: string
  condition: TFilterCondition
  value: string
  project: TTaskProject
  projectId: string
  attribute: TTaskAttribute
  attributeId: string
}

export type TTaskAttribute = {
  id: string
  label: string
  icon: string
  isPrimary: boolean
  isFilterable: boolean
  isSortable: boolean
  nativeField: string
  type: TAttributeType
  filterConditions: TFilterCondition[]
  options: TSelectItem[]
}

export type TTaskActivities = {
  id: string
  action: string
  createdAt: string
  updatedAt: string
  userId: string
  user: TUser
}

export type TTaskAttachment = {
  fileId: string
  taskId: string
  workspaceId: string
  createdAt: string
  updatedAt: string
  file: TAttachmentFile
}

export type TAttachmentFile = {
  id: string
  name: string
  url: string
  size: string
  bucket: string
  key: string
  mimetype: string
  eTag: string
  type: string
  createdAt: string
  updatedAt: string
  folderId: string
  spaceId: string
  userId: string
  workspaceId: string
}

export type TSelectItem = {
  label: string
  value: string
  color?: string
}

export enum TAttributeType {
  text = 'text',
  number = 'number',
  checkbox = 'checkbox',
  date = 'date',
  timestamp = 'timestamp',
  rating = 'rating',
  select = 'select',
  user = 'user',
  url = 'url',
  boolean = 'boolean'
}
