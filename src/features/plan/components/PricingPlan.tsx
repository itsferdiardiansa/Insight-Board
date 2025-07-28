'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { IoPricetagsOutline } from 'react-icons/io5'
import { PricingProvider } from '@/context/pricing/BillingProvider'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { PlanList } from './PricingPlanList'
import { PlanSelector, PlanSelectorProps } from './PricingPlanSelector'

type PlanProps = {
  title?: string
  subtitle?: string
  selectorVariant?: PlanSelectorProps['variant']
}

export const PricingPlan: React.FC<PlanProps> = ({
  title,
  subtitle,
  selectorVariant,
}) => {
  const planSelectorRef = useRef<HTMLDivElement | null>(null)
  const cardListRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (planSelectorRef.current) {
        gsap.fromTo(
          planSelectorRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: planSelectorRef.current,
              start: 'top 90%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <PricingProvider>
      <SectionShell direction={'col'}>
        {title && subtitle && (
          <SectionHeader
            title={title}
            subtitle={subtitle}
            badgeLabel="Pricing"
            badgeVariant="secondary"
            badgeIcon={<IoPricetagsOutline />}
            textAlign={'center'}
          />
        )}

        <div className="flex flex-col gap-(--space-4xl)">
          <div ref={planSelectorRef} className="flex justify-center opacity-0">
            <PlanSelector variant={selectorVariant} />
          </div>

          <PlanList ref={cardListRef} withAnimation />
        </div>
      </SectionShell>
    </PricingProvider>
  )
}
