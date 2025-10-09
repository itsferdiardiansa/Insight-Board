import { forwardRef } from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/utils/tailwind'
import { FaCheck } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  className?: string
  autoFocus?: boolean
  onChange?: (checked: boolean) => void
}

export const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      checked,
      defaultChecked,
      disabled,
      checkedChildren = <FaCheck />,
      unCheckedChildren = <HiXMark />,
      autoFocus,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <SwitchPrimitives.Root
        ref={ref}
        className={cn(
          'h-7 relative inline-flex cursor-pointer items-center rounded-full transition-colors',
          checked ? 'bg-primary-intense' : 'bg-neutral-300 dark:bg-neutral-700',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        autoFocus={autoFocus}
        onCheckedChange={state => onChange?.(state)}
        {...props}
      >
        {/* Inner container */}
        <div
          className={cn(
            'h-full text-xs font-medium overflow-hidden',
            'pointer-events-none select-none text-white',
            'transition-padding-inline-start transition-padding-inline-end duration-200 ease-in-out',
            !checked ? 'ps-[26px] pe-[9px]' : 'ps-[9px] pe-[32px]'
          )}
        >
          <span
            className={cn(
              'w-full h-full flex items-center justify-center',
              'transition-margin-inline-start transition-margin-inline-end duration-200 ease-in-out',
              !checked &&
                'ms-[calc(-100%+calc(10px*2)-calc(24px*2))] me-[calc(100%-calc(10px*2)+calc(24px*2))]'
            )}
          >
            {checkedChildren}
          </span>
          <span
            className={cn(
              'w-full h-full flex items-center justify-center mt-[-27px]',
              'transition-margin-inline-start transition-margin-inline-end duration-200 ease-in-out',
              checked
                ? 'ms-[calc(100%-calc(4px+2px*2)+calc(24px*2))] me-[calc(-100%+calc(4px+2px*2)-calc(24px*2))]'
                : 'ms-[0px] me-[0px]'
            )}
          >
            {unCheckedChildren}
          </span>
        </div>

        {/* Thumb (handle) */}
        <SwitchPrimitives.Thumb
          className={cn(
            'w-5 h-5 absolute bg-white rounded-full shadow transition-all duration-200 ease-in-out',
            checked ? 'start-[calc(100%-calc(23px))]' : 'start-[3px]'
          )}
        />
      </SwitchPrimitives.Root>
    )
  }
)

Switch.displayName = 'Switch'
