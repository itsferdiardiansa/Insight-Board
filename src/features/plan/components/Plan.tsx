'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { IoPricetagsOutline } from 'react-icons/io5'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { PLanList } from '@/features/plan/components/PlanList'
import { PlanSelector } from './PlanSelector'

type PlanProps = {
  title: string
  subtitle: string
}

export const Plan: React.FC<PlanProps> = ({ title, subtitle }) => {
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
    <SectionShell direction={'col'}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        badgeLabel="Pricing"
        badgeVariant="secondary"
        badgeIcon={<IoPricetagsOutline />}
        textAlign={'center'}
      />

      <div className="flex flex-col gap-(--space-4xl)">
        <div ref={planSelectorRef} className="flex justify-center opacity-0">
          <PlanSelector />
        </div>

        <PLanList ref={cardListRef} />
      </div>
    </SectionShell>
  )
}
