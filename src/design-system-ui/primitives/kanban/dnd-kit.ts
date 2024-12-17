import type {
  Active as dndActive,
  DraggableAttributes as dndDraggableAttributes,
  Over as dndOver,
  UniqueIdentifier as dndUniqueIdentifier
} from '@dnd-kit/core'
import { SyntheticListenerMap as dndSyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import {
  horizontalListSortingStrategy as dndHorizontalListSortingStrategy,
  verticalListSortingStrategy as dndVerticalListSortingStrategy
} from '@dnd-kit/sortable'

export const verticalListSortingStrategy = dndVerticalListSortingStrategy
export const horizontalListSortingStrategy = dndHorizontalListSortingStrategy
export type UniqueIdentifier = dndUniqueIdentifier
export type Active = dndActive
export type DraggableAttributes = dndDraggableAttributes
export type SyntheticListenerMap = dndSyntheticListenerMap
export type Over = dndOver
