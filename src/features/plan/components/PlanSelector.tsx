'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { useBilling } from '@/context/billing/BillingContext'
import { cn } from '@/utils/tailwind'

type PlanSelectorProps = {
  onToggle?: (isAnnual: boolean) => void
}

export const PlanSelector: React.FC<PlanSelectorProps> = ({ onToggle }) => {
  const { isAnnual, toggleBilling } = useBilling()

  const containerRef = useRef<HTMLDivElement>(null)
  const monthlyRef = useRef<HTMLButtonElement>(null)
  const annualRef = useRef<HTMLButtonElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Position/animate slider on mount + toggle
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
    if (isAnnual) toggleBilling()
    onToggle?.(false)
  }

  const handleAnnual = () => {
    if (!isAnnual) toggleBilling()
    onToggle?.(true)
  }

  return (
    <div ref={containerRef} className="flex items-center gap-(--space-sm)">
      <div className="relative flex items-center gap-0 rounded-xl p-(--space-xs) bg-gray-100 shadow-md shadow-gray-100 border border-gray-100">
        <div
          ref={sliderRef}
          className="absolute inset-0 my-auto rounded-[inherit] bg-white pointer-events-none"
          style={{ width: 0, height: '100%', transform: 'translateX(0)' }}
        />

        <Button
          ref={monthlyRef}
          type="button"
          variant="ghost"
          onClick={handleMonthly}
          className={cn(
            'relative z-10 px-(--space-md) py-(--space-sm) my-auto rounded-xl transition-colors duration-150',
            !isAnnual ? 'text-(--secondary)' : 'text-(--secondary-hover)'
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
            isAnnual ? 'text-secondary-100' : 'text-(--secondary-hover)'
          )}
        >
          Annually <span className="text-(--primary)">(-15% off)</span>
        </Button>
      </div>
      {/* <p className="ml-(--space-sm) font-bold italic text-(--primary)">Save 15%</p> */}
    </div>
  )
}
