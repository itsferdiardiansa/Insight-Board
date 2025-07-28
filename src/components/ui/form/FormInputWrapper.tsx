'use client'

import { cn } from '@/utils/tailwind'
import {
  inputColors,
  labelClasses,
  labelPositions,
  labelSizes,
} from '@/components/ui/form/_props/input-props'
import type { InputSize } from '@/components/ui/form/_props/input-props'
import { ReactNode, useId } from 'react'

type FormInputWrapperProps = {
  id?: string
  label: string
  inputSize?: InputSize
  hasError?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  filled?: boolean
  focused?: boolean
  fullWidth?: boolean
  children: ReactNode
}

export const FormInputWrapper = ({
  id,
  label,
  required,
  disabled,
  readOnly,
  inputSize = 'md',
  hasError,
  focused,
  filled,
  fullWidth,
  children,
}: FormInputWrapperProps) => {
  const customId = useId()
  const inputId = id ?? customId
  const state = hasError ? 'error' : focused ? 'focused' : 'default'

  const displayLabel = (
    <span>
      {(readOnly ? 'Read Only' : disabled) ? 'Disabled' : label}
      {required && !readOnly && !disabled && <span>*</span>}
    </span>
  )

  return (
    <div className={cn('relative', { 'w-full': fullWidth })}>
      <label
        htmlFor={inputId}
        className={cn(
          'absolute top-0 -left-1 bg-white px-1 transition-all pointer-events-none z-[1]',
          labelClasses[inputSize],
          (focused || filled || readOnly || disabled) && [
            labelSizes[inputSize],
            labelPositions[inputSize],
          ],
          inputColors[state].label
        )}
      >
        {displayLabel}
      </label>

      <div className="relative">
        {children}

        <fieldset
          className={cn(
            'absolute inset-0 rounded-sm px-2 pointer-events-none border transition-all duration-200',
            inputColors[state].border
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
