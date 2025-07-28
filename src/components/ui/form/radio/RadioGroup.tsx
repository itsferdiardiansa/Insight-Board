'use client'

import React, { createContext, useContext } from 'react'
import { cn } from '@/utils/tailwind'

type RadioGroupContextProps = {
  value?: string
  onChange?: (value: string) => void
  name?: string
}

const RadioGroupContext = createContext<RadioGroupContextProps>({})

export const useRadioGroup = () => useContext(RadioGroupContext)

export type RadioGroupProps = {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  name?: string
  className?: string
  children: React.ReactNode
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  name,
  className,
  children,
}) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange, name }}>
      <div className={cn('inline-flex gap-4', className)}>{children}</div>
    </RadioGroupContext.Provider>
  )
}
