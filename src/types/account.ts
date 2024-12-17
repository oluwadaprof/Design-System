import { TUser } from './user'

type TParticipants = {
  name: string
  role: string
  email: string
  domain: string
}

type TEmailHeader = {
  to: string
  date: string
  from: string
  subject: string
  'arc-seal': string
  received: string
  'message-id': string
  'x-received': string
  'feedback-id': string
  'return-path': string
  'content-type': string
  'delivered-to': string
  'mime-version': string
  'received-spf': string
  'dkim-signature': string
  'x-ses-outgoing': string
  'x-google-smtp-source': string
  'arc-message-signature': string
  'authentication-results': string
  'content-transfer-encoding': string
  'arc-authentication-results': string
}

export type TThread = {
  id: string
  accountId: string
  createdAt: string
  updatedAt: string
  hasAttachments: boolean
  providerId: string
  messages: TMessage[]
  accessId: string
  userId: string
  workspaceId: string
}

export type TMessage = {
  id: string
  accountId: string
  bcc: TParticipants[]
  cc: TParticipants[]
  to: TParticipants[]
  from: TParticipants[]
  headers: TEmailHeader
  providerId: string
  providerThreadId: string
  snippet: string
  labels: string[]
  workspaceId: string
  parts: TMessagePart[]
}

export type TMessagePart = {
  partId: string
  filename: string
  mimeType: string
  body: {
    data: string
    size: number
  }
  partType: 'content' | 'attachment'
}

export type TAccount = {
  id: string
  type: string
  sharingPermission: string
  scope: string
  platformIdentifier: string
  userId: string
  user: TUser
  messagesCountAtSyncStart: number
  doneSyncingInitialMessages: boolean
  _count: {
    threads: number
    messages: number
    events: number
  }
}
