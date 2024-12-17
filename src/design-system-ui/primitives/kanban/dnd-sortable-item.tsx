'use client'

import { DraggableAttributes, UniqueIdentifier } from '@dnd-kit/core'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import { Box } from '../layout'

export type TRenderItemProps = {
  attributes: DraggableAttributes
  setActivatorNodeRef: (element: HTMLElement | null) => void
  listeners?: SyntheticListenerMap
  isDragging: boolean
  disabled?: boolean
  isSorting: boolean
}

type SortableItemProps = {
  id: UniqueIdentifier
  containerId: UniqueIdentifier
  index: number
  metaData?: any
  disabled?: boolean
  renderItem: (props: TRenderItemProps) => React.ReactNode
}

export const DndSortableItem = (props: SortableItemProps) => {
  const { disabled = false, id, metaData, index, renderItem } = props
  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    isDragging,
    isSorting,
    // over,
    // overIndex,
    attributes,
    transform,
    transition
  } = useSortable({
    id,
    data: {
      type: 'item',
      data: metaData
    }
  })
  const mounted = useMountStatus()
  const mountedWhileDragging = isDragging && !mounted

  return (
    <Box
      transform="translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1))
    scaleY(var(--scale-y, 1))"
      transformOrigin="0 0"
      touchAction="manipulation"
      pos="relative"
      animation={mountedWhileDragging ? 'fadeIn 400ms ease-out' : undefined}
      style={
        {
          transition: [transition].filter(Boolean).join(', '),
          '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
          '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
          '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
          '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
          '--index': index
        } as React.CSSProperties
      }
      ref={setNodeRef}
    >
      {/* <Box pos="relative" transform="scale(var(--scale, 1))" transformOrigin="50% 50%">
      </Box> */}
      {renderItem({
        disabled,
        isSorting,
        attributes,
        listeners,
        setActivatorNodeRef,
        isDragging
      })}
    </Box>

    // <DndItem
    //   ref={disabled ? undefined : setNodeRef}
    //   dragging={isDragging}
    //   handleProps={{ ref: setActivatorNodeRef }}
    //   index={index}
    //   transition={transition}
    //   transform={transform}
    //   fadeIn={mountedWhileDragging}
    //   listeners={listeners}
    //   renderItem={renderItem}
    // />
  )
}

const useMountStatus = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)

    return () => clearTimeout(timeout)
  }, [])

  return isMounted
}
