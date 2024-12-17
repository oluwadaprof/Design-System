import { Editor } from '@tiptap/core'
import { Range } from '@tiptap/react'

export type CommandProps = { editor: Editor; range: Range }

export type TItem = {
  id: string
  title: string
  description: string
  type: string
  searchTerms: string[]
  icon: JSX.Element
  isActive: boolean
  command: ({ editor, range }: CommandProps) => void
  children?: TItem[]
}

export type TEditorSelectionData = {
  hasComment: boolean
  commentId: string
}

export type TEditorUpdateData = {
  isEmpty: boolean
  editor: Editor
}
