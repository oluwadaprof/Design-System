type User = {
  id: string
  name: string
  shortName: string
  displayName: string
  secondaryDisplayName: string
  profilePictureURL: string | null
  metadata: Record<string, unknown>
}

type Header = {
  type: string
  userID?: string
  user?: User
  text?: string
  bold?: boolean
}

type Sender = User

type Parameters = {
  threadName: string
  senders: Sender[]
}

type HeaderTranslation = {
  key: string
  parameters: Parameters
}

type Child = {
  text?: string
  type?: string
  user?: { id: string }
  children?: Child[]
}

type Content = {
  type: string
  children: Child[]
}

type Message = {
  id: string
  organizationID: string
  groupID: string
  threadID: string
  authorID: string
  url: string
  content: Content[]
  plaintext: string
  type: string
  iconURL: string | null
  translationKey: string | null
  metadata: Record<string, unknown>
  createdTimestamp: string
  updatedTimestamp: string | null
  deletedTimestamp: string | null
  seen: boolean
  seenBy: string[]
  extraClassnames: string
  attachments: any[]
  reactions: any[]
  skipLinkPreviews: boolean
}

type Attachment = {
  type: string
  messageID: string
  threadID: string
  message: Message
}

export type TNotification = {
  id: string
  senderUserIDs: string[]
  iconUrl: string | null
  header: Header[]
  headerTranslation: HeaderTranslation
  attachment: Attachment
  readStatus: string
  timestamp: string
  extraClassnames: string | null
  metadata: Record<string, unknown>
}
