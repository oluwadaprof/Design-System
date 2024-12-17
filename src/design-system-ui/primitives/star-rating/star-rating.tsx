'use client'

import { useEffect, useState } from 'react'



import { RadioGroup, RadioGroupItem } from '../radio-group'
import { Span } from '../text'
import { Icons } from '@design-system-ui/icons/base'

const STARS = [1, 2, 3, 4, 5]

type Props = {
  disabled?: boolean
  value: string
  onValueChange: (value: string) => void
}

export const StarRating = ({ disabled, value, onValueChange }: Props) => {
  const [count, setCount] = useState(value)
  const [hoverValue, setHoverValue] = useState(0)

  const starCount = Number(value)

  useEffect(() => {
    onValueChange(count)
  }, [count])

  return (
    <RadioGroup display="flex" value={count} onValueChange={setCount}>
      {STARS.map((star) => {
        const isActive = starCount >= star || hoverValue >= star

        return (
          <RadioGroupItem
            disabled={disabled}
            look="ghost"
            key={star}
            w="5"
            h="5"
            border="none"
            _focus={{ border: 'none' }}
            value={String(star)}
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(0)}
          >
            <Span
              color={isActive ? 'sPrimaryAlpha.9' : 'sAppMutedText'}
              _hover={{ opacity: '0.8' }}
            >
              <Icons.star
                css={{
                  fill: isActive ? 'sPrimaryAlpha.9' : 'none'
                }}
              />
            </Span>
          </RadioGroupItem>
        )
      })}
    </RadioGroup>
  )
}
