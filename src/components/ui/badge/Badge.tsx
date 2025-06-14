'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'
import * as React from 'react'

const badgeVariants = cva(
  'inline-flex items-center px-3 py-1.5 text-sm font-semibold uppercase tracking-widest rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-blue-100 text-blue-700',
        secondary: 'bg-gray-100 text-gray-700',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-yellow-100 text-yellow-800',
        danger: 'bg-red-100 text-red-700',
        info: 'bg-sky-100 text-sky-700',
        neutral: 'bg-slate-100 text-slate-700',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  )
}
