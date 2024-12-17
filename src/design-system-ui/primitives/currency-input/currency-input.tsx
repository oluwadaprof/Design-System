'use client'

import React from 'react'
import CurrencyInputField from 'react-currency-input-field'
import { CurrencyInputOnChangeValues } from 'react-currency-input-field/dist/components/CurrencyInputProps'

import { inputStyles } from '../input'

type Props = {
  id?: string
  name?: string
  placeholder?: string
  defaultValue?: number
  decimalsLimit?: number
  onValueChange?: (
    value: string | undefined,
    name?: string | undefined,
    values?: CurrencyInputOnChangeValues
  ) => void
  autoFocus?: boolean
}

export const CurrencyInput = React.forwardRef<
  React.ElementRef<typeof CurrencyInputField>,
  React.ComponentPropsWithoutRef<typeof CurrencyInputField> & Props
>(function CurrencyInput({ className, ...props }, ref) {
  return (
    <CurrencyInputField ref={ref} className={className || inputStyles({ use: 'sm' })} {...props} />
  )
})
