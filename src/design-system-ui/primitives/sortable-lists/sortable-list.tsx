import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import type { Active, UniqueIdentifier } from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import React, { useMemo, useState } from 'react'
import type { ReactNode } from 'react'

import { Flex } from '../layout'
import { DragHandle, SortableItem } from './sortable-item'
import { SortableOverlay } from './sortable-overlay'

type BaseItem = {
  id: UniqueIdentifier
}

type Props<T extends BaseItem> = {
  items: T[]
  onChange: (items: T[]) => void
  renderItem: (item: T) => ReactNode
  onDragEndCallback: (items: T[], index: number) => void
}

export const SortableList = <T extends BaseItem>({
  items,
  onChange,
  renderItem,
  onDragEndCallback
}: Props<T>) => {
  const [active, setActive] = useState<Active | null>(null)
  const activeItem = useMemo(() => items.find((item) => item.id === active?.id), [active, items])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActive(active)
      }}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = items.findIndex(({ id }) => id === active.id)
          const overIndex = items.findIndex(({ id }) => id === over.id)

          const updatedItems = arrayMove(items, activeIndex, overIndex)
          onChange(updatedItems)

          const updatedActiveIndex = updatedItems.findIndex(({ id }) => id === active.id)

          onDragEndCallback(updatedItems, updatedActiveIndex)
        }
        setActive(null)
      }}
      onDragCancel={() => {
        setActive(null)
      }}
    >
      <SortableContext items={items}>
        <Flex flexDir="column" role="sortable-list-items">
          {items.map((item) => (
            <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
          ))}
        </Flex>
      </SortableContext>
      <SortableOverlay>{activeItem ? renderItem(activeItem) : null}</SortableOverlay>
    </DndContext>
  )
}

SortableList.Item = SortableItem
SortableList.DragHandle = DragHandle
