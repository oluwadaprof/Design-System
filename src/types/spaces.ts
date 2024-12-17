import { TWorkspace } from '@pulse-types/workspace'

import { TList } from './lists'
import { TNote } from './notes'
import { TUser } from './user'

type TSpaceUser = {
  spaceId: string
  space: TSpace
  userId: string
  user: TUser
}

export type TSpace = {
  id: string
  name: string
  color: string
  isPublic: boolean
  isDefault: boolean
  createdAt: string
  updatedAt: string
  createdById: string
  workspaceId: string
  notes: TNote[]
  lists: TList[]
  whoCanAccess: TSpaceUser[]
}

export type TAccess = {
  id: string
  entity: 'list' | 'note' | 'thread' | 'message' | 'sequence' | 'report'
  scope: 'none' | 'workspace' | 'channel' | 'users'
  permission: number
  userId: string
  user: TUser
  workspaceId: string
  workspace: TWorkspace
  usersWithAccess: TAccessUser[]
  createdAt: string
  updatedAt: string
}

export type TAccessUser = {
  accessId: string
  access: TAccess
  userId: string
  user: TUser
  permission: number
}
