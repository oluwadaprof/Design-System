import React, { ReactNode, useState } from 'react'

import { Icons } from 'public/images/design-system-ui/icons/base'
import { Button } from 'public/images/design-system-ui/primitives/button'
import { Popover, PopoverContent, PopoverTrigger } from 'public/images/design-system-ui/primitives/popover'
import { Flex } from 'public/images/design-system-ui/styled-system/jsx'
import { token } from 'public/images/design-system-ui/styled-system/tokens'
import { USER_COLORS } from 'public/images/design-system-ui/theme/colors'

import { PopoverContentProps } from '../popover/popover-content'

type Props = {
  color: string
  setColor: (color: string) => void
  triggerChildren?: ReactNode
  popoverContentProps?: PopoverContentProps
}

export const UserColorSelector = ({
  triggerChildren,
  popoverContentProps,
  color,
  setColor
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {triggerChildren || (
          <Button
            look="grayOutline"
            size="xs"
            color={color ? 'white' : 'sAppText'}
            style={{ backgroundColor: token.var(`colors.sUserColors.${color}` as any) }}
          >
            <Icons.caretDown size={12} />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent w="26rem" p="2.5" align="start" {...popoverContentProps}>
        <Flex gap="2.5" wrap="wrap">
          {USER_COLORS.map((color) => (
            <Button
              key={color}
              size="auto"
              look="ghost"
              w="5"
              h="5"
              rounded="50%"
              fontSize="1"
              color="white"
              style={{ backgroundColor: token.var(`colors.sUserColors.${color}` as any) }}
              onClick={(e) => {
                e.stopPropagation()
                setColor(color)
                setOpen(false)
              }}
            >
              A
            </Button>
          ))}
        </Flex>
      </PopoverContent>
    </Popover>
  )
}
