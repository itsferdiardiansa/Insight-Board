'use client'

import { type HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'

const sectionShellVariants = cva('flex gap-(--space-lg) md:gap-(--space-4xl)', {
  variants: {
    gapSize: {
      sm: 'gap-(--space-sm) md:gap-(--space-lg)',
      md: 'gap-(--space-md) md:gap-(--space-xl)',
      lg: 'gap-(--space-lg) md:gap-(--space-4xl)',
    },
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      colReverse: 'flex-col-reverse',
    },
    responsiveDirection: {
      smCol: 'sm:flex-col',
      mdCol: 'md:flex-col',
      lgCol: 'lg:flex-col',
      xlCol: 'xl:flex-col',
      smRow: 'sm:flex-row',
      mdRow: 'md:flex-row',
      lgRow: 'lg:flex-row',
      xlRow: 'xl:flex-row',
    },
  },
  defaultVariants: {
    gapSize: 'lg',
  },
})

export interface SectionShellProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionShellVariants> {
  children: React.ReactNode
  innerClassName?: string
}

export const SectionShell = forwardRef<HTMLDivElement, SectionShellProps>(
  (
    {
      children,
      className,
      innerClassName,
      direction,
      responsiveDirection,
      gapSize,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('content-block', className)}>
        <div
          ref={ref}
          className={cn(
            sectionShellVariants({ direction, responsiveDirection, gapSize }),
            innerClassName
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
)

SectionShell.displayName = 'SectionShell'
