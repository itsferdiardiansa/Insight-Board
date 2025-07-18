'use client'

import { type HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'

const sectionShellVariants = cva('flex', {
  variants: {
    gapSize: {
      sm: 'gap-(--space-sm) md:gap-(--space-lg)',
      md: 'gap-(--space-md) md:gap-(--space-xl)',
      lg: 'gap-(--space-lg) md:gap-(--space-4xl)',
    },
    direction: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',

      col: 'flex-col',
      colReverse: 'flex-col-reverse',
    },
    responsiveDirection: {
      smCol: 'sm:flex-col',
      smColReverse: 'sm:flex-col-reverse',

      mdCol: 'md:flex-col',
      mdColReverse: 'md:flex-col-reverse',

      lgCol: 'lg:flex-col',
      lgColReverse: 'lg:flex-col-reverse',

      xlCol: 'xl:flex-col',
      xlColReverse: 'xl:flex-col-reverse',

      smRow: 'sm:flex-row',
      smRowReverse: 'sm:flex-row-reverse',

      mdRow: 'md:flex-row',
      mdRowReverse: 'md:flex-row-reverse',

      lgRow: 'lg:flex-row',
      lgRowReverse: 'lg:flex-row-reverse',

      xlRow: 'xl:flex-row',
      xlRowReverse: 'xl:flex-row-reverse',
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
