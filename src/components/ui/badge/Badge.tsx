'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'

const badgeVariants = cva(
  'inline-flex items-center gap-(--space-sm) font-bold rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-(--primary) text-neutral-100',
        outlinePrimary: 'outline outline-(--primary) text-(--primary)',
        secondary: 'bg-(--secondary) text-neutral-100',
        outlineSecondary: 'outline outline-(--secondary)',
        destructive: 'bg-red-700 text-neutral-100',
        outlineDestructive: 'outline outline-red-700 text-red-700',

        ghost: 'text-neutral-700',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        full: 'rounded-full',
      },
      size: {
        sm: 'px-2.5 py-1.5 text-sm',
        md: 'px-3.5 py-2.5 text-base',
        lg: 'px-4.5 py-3.5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  rounded,
  icon,
  iconPosition = 'left',
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        badgeVariants({ variant, size, rounded }),
        iconPosition === 'right' && 'flex-row-reverse',
        className
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  )
}
