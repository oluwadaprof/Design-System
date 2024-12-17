'use client'

import { DraggableAttributes, UniqueIdentifier } from '@dnd-kit/core'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { AnimateLayoutChanges, defaultAnimateLayoutChanges, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { Box } from '../layout'

export type TRenderStageProps = {
  id: UniqueIdentifier
  disabled?: boolean
  horizontal?: boolean
  style?: React.CSSProperties
  isDragging: boolean
  isOverContainer: boolean
  attributes: DraggableAttributes
  listeners?: SyntheticListenerMap
  children: React.ReactNode
}

type DroppableContainerProps = {
  id: UniqueIdentifier
  items: UniqueIdentifier[]
  disabled?: boolean
  horizontal?: boolean
  metaData?: any
  children: React.ReactNode
  renderStage: (props: TRenderStageProps) => React.ReactNode
}

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true })

export const DndDroppableContainer = (props: DroppableContainerProps) => {
  const { children, metaData, disabled, horizontal, id, items, renderStage } = props

  const { active, attributes, isDragging, listeners, over, setNodeRef, transition, transform } =
    useSortable({
      id,
      data: {
        type: 'container',
        data: metaData,
        children: items
      },
      animateLayoutChanges
    })

  const isOverContainer = over
    ? (id === over.id && active?.data.current?.type !== 'container') || items.includes(over.id)
    : false

  return (
    <Box ref={disabled ? undefined : setNodeRef}>
      {renderStage({
        id,
        style: {
          transition,
          transform: CSS.Translate.toString(transform)
        },
        isDragging,
        horizontal,
        disabled,
        isOverContainer,
        attributes,
        listeners,
        children
      })}
    </Box>
  )
}
