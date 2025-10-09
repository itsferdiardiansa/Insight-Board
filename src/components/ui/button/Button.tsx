'use client'

import { type ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cn } from '@/utils/tailwind'

const buttonSizes = {
  sm: 'px-2.5 py-1.5 text-body-sm',
  md: 'px-3.5 py-2.5 text-body-md',
  lg: 'px-4.5 py-3.5 text-body-lg',
}

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-bold! tracking-wide cursor-pointer transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-intense text-inverse hover:bg-primary-intense-hovered',
        outlinePrimary:
          'border border-primary text-primary hover:bg-primary-intense hover:border-primary-intense hover:text-inverse',
        secondary:
          'bg-secondary-intense-pressed text-inverse hover:bg-secondary-intense-hovered',
        outlineSecondary:
          'border border-secondary text-secondary hover:bg-secondary-intense hover:border-secondary-intense hover:text-inverse',
        destructive:
          'bg-destructive-intense text-inverse hover:bg-destructive-intense-hovered',
        outlineDestructive:
          'border border-destructive text-accent-red hover:bg-destructive-intense hover:border-destructive-intense hover:text-inverse',
        light: 'bg-default text-default hover:bg-inverse-hovered',
        outlineLight:
          'border border-disabled text-default hover:bg-default hover:text-default',
        ghost: 'text-secondary',
      },
      size: buttonSizes,
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        full: 'rounded-full',
      },
      disabled: {
        true: 'bg-disabled! text-secondary disabled:cursor-not-allowed disabled:opacity-50',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      { disabled: false, rounded: 'none', className: 'hover:rounded-md' },
      { disabled: false, rounded: 'sm', className: 'hover:rounded-lg' },
      { disabled: false, rounded: 'md', className: 'hover:rounded-xl' },
    ],
    defaultVariants: {
      variant: 'primary',
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
  innerClassName?: string
  disabled?: boolean
  loading?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      innerClassName,
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
        {loading && (
          <div
            className={cn(
              'flex gap-space-sm items-center justify-center cursor-not-allowed',
              buttonSizes[size as keyof typeof buttonSizes],
              innerClassName
            )}
          >
            <div
              className="w-4 h-4 rounded-full inline-block border-t-[2px] border-r-[2px] border-white border-r-transparent box-border animate-spin"
              data-testid="btn-loading-spinner"
              aria-hidden
            />
          </div>
        )}

        {!loading && (
          <Slottable>
            {asChild ? (
              children
            ) : (
              <div
                className={cn(
                  'flex gap-space-sm items-center justify-center',
                  buttonSizes[size as keyof typeof buttonSizes],
                  innerClassName
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
