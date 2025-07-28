'use client'

import React, { ChangeEvent, FocusEvent, useId, useState } from 'react'
import { cn } from '@/utils/tailwind'
import {
  sizeClasses,
  type InputSize,
} from '@/components/ui/form/_props/input-props'
import { FormInputWrapper } from '../FormInputWrapper'

export interface SelectOption {
  value: string
  label: React.ReactNode
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string
  label: string
  options: SelectOption[]
  fullWidth?: boolean
  readOnly?: boolean
  inputSize?: InputSize
  className?: string
  hasError?: boolean
  onBlur?: () => void
}

export const Select: React.FC<SelectProps> = ({
  id: idProp,
  label,
  options,
  fullWidth,
  required,
  disabled,
  readOnly,
  inputSize = 'md',
  value,
  hasError = false,
  defaultValue,
  onChange,
  onBlur,
  ...rest
}) => {
  const autoId = useId()
  const inputId = idProp ?? autoId

  const [focused, setFocused] = useState(false)
  const [filled, setFilled] = useState(() => {
    const initial =
      value !== undefined
        ? String(value)
        : defaultValue !== undefined
          ? String(defaultValue)
          : ''
    return initial !== ''
  })

  const handleFocus = () => setFocused(true)
  const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
    setFocused(false)
    setFilled(e.target.value !== '')
    if (onBlur) onBlur()
  }
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilled(e.target.value !== '')
    onChange?.(e)
  }

  return (
    <FormInputWrapper
      id={inputId}
      label={label}
      inputSize={inputSize}
      hasError={hasError}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      focused={focused}
      filled={filled}
      fullWidth={fullWidth}
    >
      <select
        id={inputId}
        required={required}
        disabled={disabled || readOnly}
        value={value}
        defaultValue={defaultValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={cn(
          'pr-10! peer w-full bg-transparent outline-none appearance-none cursor-pointer',
          sizeClasses[inputSize],
          disabled ? 'text-gray-400' : 'text-neutral-900'
        )}
        {...rest}
      >
        {!filled && <option value="" aria-hidden="true"></option>}

        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FormInputWrapper>
  )
}
