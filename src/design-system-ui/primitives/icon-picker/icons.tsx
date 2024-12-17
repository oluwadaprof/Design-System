'use client'

import React, { useMemo, useState } from 'react'



import { Button } from '../button'
import { Box, Flex } from '../layout'
import { Input } from '../input'

export const Icons = (props: { onIconClick: (icon: string) => void }) => {
  const { onIconClick } = props
  const iconKeys = useMemo(() => {
    return Object.keys(ICON_PICKER_OPTIONS)
  }, [])

  const [icons, setIcons] = useState(iconKeys)

  const handleSearch = (query: string) => {
    if (!query) {
      setIcons(iconKeys)
    }

    const filtered = iconKeys.filter((icon) => {
      // @ts-expect-error - implicit any
      const name = data[icon].name as string
      return name.toLowerCase().includes(query)
    })

    setIcons(filtered)
  }

  return (
    <Box py="3.5">
      <Input onChange={(e) => handleSearch(e.target.value)} placeholder="Search icon" />

      <Flex wrap="wrap" mt="5">
        {icons.map((key) => {
          // @ts-expect-error - implicit any
          const Icon = ICON_PICKER_OPTIONS[key].icon

          return (
            <Button
              key={key}
              onClick={() => onIconClick(key)}
              look="transparent"
              size="xs"
              w="3.2rem"
              h="3.2rem"
            >
              <Icon size={20} />
            </Button>
          )
        })}
      </Flex>
    </Box>
  )
}

export const ICON_PICKER_OPTIONS = {
  folder: {
    name: 'Folder',
    icon: <></>
  },
  book: {
    name: 'Book',
    icon: <></>
  },
  bookmark: {
    name: 'Bookmark',
    icon: <></>
  },
  'push-pin': {
    name: 'Push Pin',
    icon: <></>
  },
  house: {
    name: 'House',
    icon: <></>
  },
  gift: {
    name: 'Gift',
    icon: <></>
  },
  graduation: {
    name: 'Graduation',
    icon: <></>
  },
  airplane: {
    name: 'Airplane',
    icon: <></>
  },
  notification: {
    name: 'Notification',
    icon: <></>
  },
  airplay: {
    name: 'Airplay',
    icon: <></>
  },
  screencast: {
    name: 'Screencast',
    icon: <></>
  },
  atom: {
    name: 'Atom',
    icon: <></>
  }
}

export type TIconKey = keyof typeof ICON_PICKER_OPTIONS
