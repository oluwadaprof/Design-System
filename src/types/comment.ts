import { TEmojiData } from './emoji'
import { TUser } from './user'

export type TComment = {
  id: string
  body: string
  isResolved: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  pageId: string
  userId: string
  parentCommentId: string | null
  parentComment: TComment | null
  replies: TComment[]
  reactions: TReaction[]
  user: TUser
}

export type TReaction = {
  id: string
  emojiId: string
  name: string
  native: string
  unified: string
  metadata: TEmojiData
  count: number
  createdAt: string
  updatedAt: string
  commentId: string
  users: { user: TUser }[]
}
