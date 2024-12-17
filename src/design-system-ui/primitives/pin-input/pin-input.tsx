'use client'

import { css } from '@design-system-ui/styled-system/css'
import React from 'react'
import OtpInput from 'react18-input-otp'



type PinInputProps = {
  numInputs?: number
  placeholder?: string
  isInputSecure?: boolean
  value: string
  onChange: (val: string) => void
  onSubmit?: (val: string) => void
}

const inputStyle = css({
  w: '60% !important',
  h: '3.44rem',
  bg: 'sGrayAlpha',
  rounded: 'xl',

  fontWeight: '500',
  fontSize: '2',
  border: 'subtle',
  m: '1',
  outline: 'none',

  '&::placeholder': {
    color: 'sFormPlaceholder'
  },

  '&:focus': {
    border: '1.5px solid token(colors.primary)'
  }
})

export const PinInput = ({
  numInputs,
  placeholder,
  isInputSecure,
  value,
  onChange,
  onSubmit
}: PinInputProps) => {
  return (
    <OtpInput
      numInputs={numInputs}
      placeholder={placeholder}
      isInputSecure={isInputSecure}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      inputStyle={inputStyle}
    />
  )
}
