import { UniqueIdentifier, useDroppable } from '@dnd-kit/core'

import { Box } from '../layout'

export const DndTrash = ({ id }: { id: UniqueIdentifier }) => {
  const { setNodeRef, isOver } = useDroppable({
    id
  })

  return (
    <Box
      ref={setNodeRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: '50%',
        marginLeft: -150,
        bottom: 20,
        width: 300,
        height: 60,
        borderRadius: 5,
        border: '1px solid',
        borderColor: isOver ? 'red' : '#DDD'
      }}
    >
      Drop here to delete
    </Box>
  )
}
