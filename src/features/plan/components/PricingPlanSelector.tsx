'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { usePricing } from '@/context/pricing/PricingContext'
import { BILLING_DISCOUNTS } from '@/constants/billing'
import { cn } from '@/utils/tailwind'
import { cva, VariantProps } from 'class-variance-authority'

const pricingPlanSelectorVariants = cva(
  'relative flex items-center gap-(--space-sm) rounded-xl border shadow-md',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-br from-violet-700 to-violet-500 shadow-violet-100 border-violet-100 text-neutral-50!',
        gradient:
          'bg-gradient-to-tr from-violet-100 via-pink-200 to-violet-200 shadow-violet-100 border-violet-100 text-neutral-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface PlanSelectorProps
  extends VariantProps<typeof pricingPlanSelectorVariants> {
  onToggle?: (isAnnual: boolean) => void
}

export const PlanSelector: React.FC<PlanSelectorProps> = ({
  variant,
  onToggle,
}) => {
  const { isAnnual, togglePricing } = usePricing()
  const discount = BILLING_DISCOUNTS['annual'] * 100

  const containerRef = useRef<HTMLDivElement>(null)
  const monthlyRef = useRef<HTMLButtonElement>(null)
  const annualRef = useRef<HTMLButtonElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const btn = isAnnual ? annualRef.current : monthlyRef.current
    const slider = sliderRef.current
    const container = containerRef.current
    if (!btn || !slider || !container) return

    const { offsetLeft, offsetWidth, offsetHeight } = btn

    gsap.to(slider, {
      x: offsetLeft,
      width: offsetWidth,
      height: offsetHeight,
      duration: 0.25,
      ease: 'power2.out',
    })
  }, [isAnnual])

  const handleMonthly = () => {
    if (isAnnual) togglePricing()
    onToggle?.(false)
  }

  const handleAnnual = () => {
    if (!isAnnual) togglePricing()
    onToggle?.(true)
  }

  return (
    <div
      ref={containerRef}
      className={pricingPlanSelectorVariants({ variant })}
    >
      <div className="flex items-center gap-0 p-(--space-xs)">
        <div
          ref={sliderRef}
          className="absolute inset-0 my-auto rounded-[inherit] rounded-xl bg-white pointer-events-none"
          style={{ width: 0, height: '100%', transform: 'translateX(0)' }}
        />

        <Button
          ref={monthlyRef}
          type="button"
          variant="ghost"
          onClick={handleMonthly}
          className={cn(
            'relative z-10 px-(--space-md) py-(--space-sm) my-auto rounded-xl transition-colors duration-150',
            !isAnnual
              ? 'text-neutral-700'
              : variant === 'gradient'
                ? 'text-neutral-700'
                : 'text-neutral-50'
          )}
        >
          Monthly
        </Button>

        <Button
          ref={annualRef}
          type="button"
          variant="ghost"
          onClick={handleAnnual}
          className={cn(
            'relative z-10 px-(--space-md) py-(--space-sm) my-auto rounded-xl transition-colors duration-150',
            isAnnual
              ? 'text-neutral-700'
              : variant === 'gradient'
                ? 'text-neutral-700'
                : 'text-neutral-50'
          )}
        >
          Annually{' '}
          <span className={cn(isAnnual && 'text-(--primary)')}>
            (-{discount}% off)
          </span>
        </Button>
      </div>
    </div>
  )
}
