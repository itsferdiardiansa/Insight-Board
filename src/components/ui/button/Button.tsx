'use client'

import { type ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@/utils/tailwind'
import { FaCircleNotch } from 'react-icons/fa'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-semibold cursor-pointer transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-violet-800 bg-violet-800 text-white hover:bg-violet-700',
        secondary:
          'border-gray-100 bg-gray-100 text-neutral-800 hover:bg-gray-200',
        dark: 'border-gray-800 bg-gray-800 text-neutral-50 hover:bg-gray-900',
        destructive: 'border-violet-600 bg-red-600 text-white hover:bg-red-500',

        // Outline variants
        outlinePrimary:
          'border border-violet-800 text-violet-800 bg-transparent hover:bg-violet-50',
        outlineSecondary:
          'border border-violet-100 text-neutral-800 bg-transparent hover:bg-violet-50',
        outlineDestructive:
          'border border-red-600 text-red-600 bg-transparent hover:bg-red-50',

        // Others
        outline:
          'border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100',
        ghost:
          'border-transparent bg-transparent text-neutral-800 hover:bg-neutral-100 hover:border-neutral-100',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
    compoundVariants: [
      { size: 'sm', pill: false, className: 'px-3 py-2' },
      { size: 'md', pill: false, className: 'px-4 py-3' },
      { size: 'lg', pill: false, className: 'px-5 py-4' },

      { size: 'sm', pill: true, className: 'py-1 px-2.5' },
      { size: 'md', pill: true, className: 'py-2 px-3.5' },
      { size: 'lg', pill: true, className: 'py-3 px-4.5' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      pill: false,
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
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
      size,
      fullWidth,
      pill,
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
        ref={ref}
        {...props}
        className={cn(
          buttonVariants({ variant, size, fullWidth, pill }),
          className
        )}
        data-testid="btn"
        disabled={disabled || loading}
      >
        {loading && (
          <FaCircleNotch className="animate-spin text-[1.1em]" aria-hidden />
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className="mr-2 flex items-center">{icon}</span>
        )}
        {!loading && <Slottable>{children}</Slottable>}
        {!loading && icon && iconPosition === 'right' && (
          <span className="ml-2 flex items-center">{icon}</span>
        )}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
