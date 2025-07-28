'use client'

import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PricingPlanCard } from './PricingPlanCard'
import subscriptionPlans from '@/constants/subscription-plans'
import { cn } from '@/utils/tailwind'

interface PlanListProps {
  variant?: 'pricing' | 'checkout'
  withAnimation?: boolean
  className?: string
  onClick?: () => void
}

export const PlanList = forwardRef<HTMLDivElement, PlanListProps>(
  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  ({ withAnimation = false, className }, _) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
      if (!withAnimation) return

      const ctx = gsap.context(() => {
        if (containerRef.current) {
          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.3,
              stagger: 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
              },
            }
          )
        }
      })

      return () => ctx.revert()
    }, [withAnimation])

    return (
      <div
        ref={containerRef}
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--space-md) lg:gap-(--space-lg) justify-start',
          className
        )}
      >
        {subscriptionPlans.map((item, index) => (
          <PricingPlanCard
            key={index}
            ref={(element: HTMLDivElement) => {
              cardsRef.current[index] = element
            }}
            {...item}
          />
        ))}
      </div>
    )
  }
)

PlanList.displayName = 'PlanList'
