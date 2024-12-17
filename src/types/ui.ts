export type TIcon = {
  fill?: string
  size?: number
}

export enum TFieldTypes {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  URL = 'URL',
  DATE = 'DATE',
  RATING = 'RATING',
  TAGS = 'TAGS'
}

export type TFieldEntry = {
  id: string
  label: string
  type: TFieldTypes
  value: string
  metadata: Record<string, any> | null
  fieldId: string
  createdAt: string
  isHidden: boolean
  isCustom: boolean
}
