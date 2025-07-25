'use client'

import {
  useController,
  useFormContext,
  FieldValues,
  Path,
} from 'react-hook-form'
import { isValidElement, cloneElement, ReactElement } from 'react'
import { cn } from '@/utils/tailwind'

type FormItemProps<T extends FieldValues> = {
  name: Path<T>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any>
  className?: string
}

export function FormItem<T extends FieldValues>({
  name,
  children,
  className,
}: FormItemProps<T>) {
  const { control } = useFormContext<T>()
  const {
    field: { onChange, onBlur, value, name: fieldName },
    fieldState,
  } = useController({ name, control })

  const hasError = !!fieldState.error

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isMaskedInput = (children.type as any)?.displayName === 'MaskedInput'

  const injectedProps = isMaskedInput
    ? {
        rawValue: value ?? '',
        onRawChange: onChange,
        hasError,
        name: fieldName,
        onBlur,
      }
    : {
        value: value ?? '',
        onChange,
        hasError,
        name: fieldName,
        onBlur,
      }

  return (
    <div className={cn('space-y-1', className)}>
      {isValidElement(children)
        ? cloneElement(children, injectedProps)
        : children}

      {hasError && (
        <p className="text-sm text-(--destructive)">
          {fieldState.error?.message || 'This field is required'}
        </p>
      )}
    </div>
  )
}
