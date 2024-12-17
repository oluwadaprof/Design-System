'use client'

import {
  Active,
  CancelDrop,
  DndContext,
  KeyboardCoordinateGetter,
  KeyboardSensor,
  MeasuringStrategy,
  Modifiers,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { coordinateGetter as multipleContainersCoordinateGetter } from './utils/multipleContainersKeyboardCoordinates'

type ColumnItem = { id: UniqueIdentifier; [x: string]: any }[]

export type KanbanData = Record<UniqueIdentifier, ColumnItem>

interface BoardProps {
  // Dnd props
  coordinateGetter?: KeyboardCoordinateGetter
  modifiers?: Modifiers
  cancelDrop?: CancelDrop
  // Data props
  active: Active | null
  setActive: Dispatch<SetStateAction<Active | null>>
  data: KanbanData
  setData: Dispatch<SetStateAction<BoardProps['data']>>
  containers: UniqueIdentifier[]
  setContainers: Dispatch<SetStateAction<UniqueIdentifier[]>>
  // Callbacks
  onDragEndCallback?: (
    active: Active,
    overId: UniqueIdentifier,
    containers: UniqueIdentifier[]
  ) => void
  // Children
  children?: React.ReactNode
}

export const TRASH_ID = 'void'

export const DndKanban = (props: BoardProps) => {
  const {
    cancelDrop,
    coordinateGetter = multipleContainersCoordinateGetter,
    modifiers,
    children,
    data: items,
    setData: setItems,
    containers,
    setContainers,
    active: activeState,
    setActive,
    onDragEndCallback
  } = props
  const recentlyMovedToNewContainer = useRef(false)

  const [clonedItems, setClonedItems] = useState<KanbanData | null>(null)
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter
    })
  )
  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id
    }

    return Object.keys(items).find((key) => Boolean(items[key].find((item) => item.id === id)))
  }

  const onDragCancel = () => {
    if (clonedItems) {
      // Reset items to their original state in case items have been
      // Dragged across containers
      setItems(clonedItems)
    }

    setActive(null)
    setClonedItems(null)
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false
    })
  }, [items])

  return (
    <DndContext
      sensors={sensors}
      // collisionDetection={collisionDetectionStrategy}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always
        }
      }}
      onDragStart={({ active }) => {
        setActive(active)
        setClonedItems(items)
      }}
      onDragOver={({ active, over }) => {
        const overId = over?.id

        if (overId == null || overId === TRASH_ID || active.id in items) {
          return
        }

        const overContainer = findContainer(overId)
        const activeContainer = findContainer(active.id)

        if (!overContainer || !activeContainer) {
          return
        }

        if (activeContainer !== overContainer) {
          setItems((items) => {
            const activeItems = items[activeContainer]
            const overItems = items[overContainer]
            const overIndex = overItems.findIndex((item) => item.id === overId)
            const activeIndex = activeItems.findIndex((item) => item.id === active.id)

            let newIndex: number

            if (overId in items) {
              newIndex = overItems.length + 1
            } else {
              const isBelowOverItem =
                over &&
                active.rect.current.translated &&
                active.rect.current.translated.top > over.rect.top + over.rect.height

              const modifier = isBelowOverItem ? 1 : 0

              newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
            }

            recentlyMovedToNewContainer.current = true

            return {
              ...items,
              [activeContainer]: items[activeContainer].filter((item) => item.id !== active.id),
              [overContainer]: [
                ...items[overContainer].slice(0, newIndex),
                items[activeContainer][activeIndex],
                ...items[overContainer].slice(newIndex, items[overContainer].length)
              ]
            }
          })
        }
      }}
      onDragEnd={({ active, over }) => {
        let updatedContainers = containers
        if (active.id in items && over?.id) {
          setContainers((containers) => {
            const activeIndex = containers.indexOf(active.id)
            const overIndex = containers.indexOf(over.id)
            const res = arrayMove(containers, activeIndex, overIndex)
            updatedContainers = res
            return res
          })
        }

        const activeContainer = findContainer(active.id)

        if (!activeContainer) {
          setActive(null)
          return
        }

        const overId = over?.id

        if (overId == null) {
          setActive(null)
          return
        }

        if (overId === TRASH_ID) {
          setItems((items) => ({
            ...items,
            [activeContainer]: items[activeContainer].filter((item) => item.id !== activeState?.id)
          }))
          setActive(null)
          return
        }

        const overContainer = findContainer(overId)

        if (overContainer) {
          const activeIndex = items[activeContainer].findIndex((item) => item.id === active.id)
          const overIndex = items[overContainer].findIndex((item) => item.id === overId)

          if (activeIndex !== overIndex) {
            setItems((items) => ({
              ...items,
              [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
            }))
          }

          onDragEndCallback?.(active, overContainer, updatedContainers)
        }

        setActive(null)
      }}
      cancelDrop={cancelDrop}
      onDragCancel={onDragCancel}
      modifiers={modifiers}
    >
      {children}
    </DndContext>
  )
}
