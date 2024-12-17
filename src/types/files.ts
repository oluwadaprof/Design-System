import { TSpace } from './spaces'

export type TFile = {
  id: string
  name: string
  url: string
  bucket: string
  key: string
  size: number
  mimetype: string
  eTag: string
  createdAt: string
  updatedAt: string
  folderId: string
  spaceId: string
  userId: string
  workspaceId: string
}

export type TFolder = {
  id: string
  name: string
  description: string
  color: string
  size: number
  isDefault: string
  parentFolderId?: string
  parentFolder?: TFolder
  folders: TFolder[]
  spaceId: string
  space: TSpace
  userId: string
  workspaceId: string
  _count: {
    files: number
    folders: number
  }
}
