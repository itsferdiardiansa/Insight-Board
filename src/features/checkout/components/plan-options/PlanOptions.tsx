'use client'

import { forwardRef } from 'react'
import { PlanOptionCard } from './PlanOptionCard'
import subscriptionPlans from '@/constants/subscription-plans'
import { cn } from '@/utils/tailwind'

type PlanOptionsProps = {
  className?: string
  selectedId?: number
  onPlanChange: (planId: number) => void
}

export const PlanOptions = forwardRef<HTMLDivElement, PlanOptionsProps>(
  ({ selectedId, onPlanChange, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--space-md) justify-start',
          className
        )}
      >
        {subscriptionPlans.map(item => (
          <div
            key={item.id}
            className="flex items-stretch"
            aria-pressed={Boolean(selectedId === item.id)}
            onClick={() => onPlanChange(item.id)}
          >
            <PlanOptionCard
              isActive={Boolean(selectedId === item.id)}
              {...item}
            />
          </div>
        ))}
      </div>
    )
  }
)

PlanOptions.displayName = 'PlanOptions'
