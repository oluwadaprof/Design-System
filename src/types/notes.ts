import { TEntityRecord } from '@pulse-types/entities'

import { TAccess, TSpace } from './spaces'
import { TUser } from './user'

export type TNote = {
  description: string
  createdAt: string
  id: string
  spaceId: string
  space: TSpace
  title: string
  updatedAt: string
  userId: string
  user: TUser
  workspaceId: string
  accessId: string
  access: TAccess
  link?: TNoteLink
  jsonContent: Record<string, any>
  records: TNoteRecord[]
  // pages: TNotePage[]
}

export type TNoteRecord = {
  noteId: string
  recordId: string
  record: TEntityRecord
  createdAt: string
  updatedAt: string
}

export type TNoteLink = {
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

export type TNotePage = {
  id: string
  title: string
  body: any
  createdAt: string
  updatedAt: string
  noteId: string
}
