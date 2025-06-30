'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PricingComparisonTable } from '@/features/plan/components/PricingComparisonTable'
import { SectionHeader, SectionShell } from '@/components/layout/section'

export const PlanTierComparison: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell direction={'col'}>
      <SectionHeader
        title="Find the plan that <span class='text-violet-800'>empowers</span> your growth"
        subtitle="Compare features side-by-side to discover which plan gives your team<br />the tools to scale, collaborate, and thrive."
        textAlign={'center'}
      />

      <div ref={contentRef} className="relative">
        <PricingComparisonTable />
      </div>
    </SectionShell>
  )
}
