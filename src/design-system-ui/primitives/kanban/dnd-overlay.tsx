import { DragOverlay, DropAnimation, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import React from 'react'

type OverlayProps = {
  adjustScale?: boolean
  children: React.ReactNode
}

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5'
      }
    }
  })
}

export const DndOverlay = (props: OverlayProps) => {
  const { adjustScale, children } = props

  return (
    <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
      {children}
    </DragOverlay>
  )
}
