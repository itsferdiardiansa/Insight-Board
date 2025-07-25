'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'
import { roundedMap, sizeMap, variantMap } from '../_utils/variants'

const badgeVariants = cva(
  'inline-flex items-center gap-(--space-sm) font-bold rounded-full',
  {
    variants: {
      variant: variantMap,
      rounded: roundedMap,
      size: sizeMap,
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
