'use client'

import { useState } from 'react'
import { cn } from '@/utils/tailwind'

type InputSize = 'sm' | 'md' | 'lg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  fullWidth?: boolean
  inputSize?: InputSize
}

const labelClasses: Record<InputSize, string> = {
  sm: 'text-sm translate-x-[13px] translate-y-[8px]',
  md: 'text-base translate-x-[13px] translate-y-[12px]',
  lg: 'text-lg translate-x-[14px] translate-y-[18px]',
}

const labelPositions: Record<InputSize, string> = {
  sm: '-top-4',
  md: '-top-5',
  lg: '-top-7',
}

const labelSizes: Record<InputSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'text-sm px-2 py-2',
  md: 'text-base px-3 py-3',
  lg: 'text-lg px-4 py-4',
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  fullWidth,
  required,
  readOnly,
  disabled,
  type = 'text',
  inputSize = 'md',
  ...restProps
}) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [filled, setFilled] = useState<boolean>(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    setFilled(!!e.target.value)
  }

  const displayLabel = (
    <span>
      {(readOnly ? 'Read Only' : disabled) ? 'Disabled' : label}
      {required && !readOnly && !disabled && <span>*</span>}
    </span>
  )

  return (
    <div className={cn('relative', { 'w-full': fullWidth })}>
      <label
        htmlFor={id}
        className={cn(
          'absolute top-0 left-0 my-auto transition-all scale-[1] pointer-events-none text-gray-500',
          labelClasses[inputSize],
          (focused || filled || readOnly || disabled) && [
            labelSizes[inputSize],
            labelPositions[inputSize],
          ],
          focused ? 'text-violet-600' : 'text-gray-400'
        )}
      >
        {displayLabel}
      </label>

      <div className="relative">
        <input
          id={id}
          className={cn(
            'peer w-full placeholder-transparent focus:outline-none',
            sizeClasses[inputSize],
            disabled ? 'text-gray-400' : 'text-neutral-900'
          )}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={e => setFilled(!!e.target.value)}
          {...restProps}
        />

        <fieldset
          className={cn(
            'absolute inset-0 rounded-sm px-2 pointer-events-none border transition-all duration-200',
            focused ? 'border-violet-600' : 'border-gray-300'
          )}
        >
          <legend
            className={cn(
              'w-auto h-0 p-0 transition-all duration-200 invisible whitespace-nowrap',
              labelSizes[inputSize],
              focused || filled || readOnly || disabled
                ? 'max-w-full px-1'
                : 'max-w-[0.01px] px-0'
            )}
          >
            {displayLabel}
          </legend>
        </fieldset>
      </div>
    </div>
  )
}
