'use client'

import { type ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@/utils/tailwind'
import { FaCircleNotch } from 'react-icons/fa'

const buttonSizes = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3.5 py-2.5 text-base',
  lg: 'px-4.5 py-3.5 text-lg',
}

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-bold tracking-wide cursor-pointer transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary: 'bg-(--primary) text-neutral-100 hover:bg-(--primary-hover)',
        outlinePrimary:
          'outline outline-(--primary) text-(--primary) hover:bg-(--primary) hover:text-neutral-100',
        secondary:
          'bg-(--secondary) text-neutral-100 hover:bg-(--secondary-hover)',
        outlineSecondary:
          'outline outline-(--secondary) hover:bg-(--secondary) hover:text-neutral-100',
        destructive:
          'bg-(--destructive) text-neutral-100 hover:bg-(--destructive-hover)',
        outlineDestructive:
          'outline outline-(--destructive) text-(--destructive) hover:bg-(--destructive) hover:text-neutral-100',
        light: 'bg-white text-neutral-800 hover:bg-gray-50',
        outlineLight:
          'outline outline-gray-300 text-neutral-800 hover:bg-white hover:text-black',
        ghost: 'text-(--secondary)',
      },
      size: buttonSizes,
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        full: 'rounded-full',
      },
      disabled: {
        true: 'bg-(--muted) hover:bg-(--muted) disabled:cursor-not-allowed disabled:opacity-50',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      { size: 'sm', rounded: 'full', className: 'px-2.5' },
      { size: 'md', rounded: 'full', className: 'px-3.5' },
      { size: 'lg', rounded: 'full', className: 'px-4.5' },

      { disabled: false, rounded: 'none', className: 'hover:rounded-md' },
      { disabled: false, rounded: 'sm', className: 'hover:rounded-lg' },
      { disabled: false, rounded: 'md', className: 'hover:rounded-xl' },
    ],
    defaultVariants: {
      variant: 'primary',
      // size: 'md',
      fullWidth: false,
      rounded: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  size?: keyof typeof buttonSizes
  disabled?: boolean
  loading?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      icon,
      iconPosition = 'left',
      variant,
      size = 'md',
      fullWidth,
      rounded,
      loading = false,
      asChild = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        {...props}
        ref={ref}
        data-testid="btn"
        disabled={disabled || loading}
        className={cn(
          buttonVariants({ variant, fullWidth, rounded, disabled }),
          asChild && buttonSizes[size],
          iconPosition === 'right' && 'flex-row-reverse',
          className
        )}
      >
        {loading && <FaCircleNotch className="animate-spin" aria-hidden />}
        {!loading && (
          <Slottable>
            {asChild ? (
              children
            ) : (
              <div
                className={cn(
                  'flex gap-(--space-sm) items-center justify-center',
                  buttonSizes[size as keyof typeof buttonSizes]
                )}
              >
                {!loading && icon && (
                  <span className="contents self-stretch">{icon}</span>
                )}
                <span>{children}</span>
              </div>
            )}
          </Slottable>
        )}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
