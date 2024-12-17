import React from 'react'
import TimeField from 'react-simple-timefield'

import { Input } from '../input'
import { InputProps as PulseUIInputProps } from '../input/input'
import { Box } from '../layout'

type InputProps = {
  time?: string
  setTime: (time: string) => void
  inputProps?: PulseUIInputProps
}

export const TimeInput = React.forwardRef<HTMLDivElement, InputProps>(function TimeInput(
  { inputProps, time, setTime, ...props },
  ref
) {
  return (
    <Box ref={ref}>
      <TimeField
        value={time}
        onChange={(event, value) => {
          setTime(value)
        }}
        input={<Input {...inputProps} />}
        style={{
          width: '100%',
          maxWidth: '100%'
        }}
        {...props}
      />
    </Box>
  )
})
