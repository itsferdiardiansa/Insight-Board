'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Plans } from '@/features/plan/components/Plans'
import { SectionHeader } from '@/components/layout/section/SectionHeader'
import { SectionShell } from '@/components/layout/section'

const PlanTierList: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)

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
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell className="content-block--py" direction={'col'}>
      <SectionHeader
        title="The right plan for your team"
        subtitle="Get started with our flexible pricing options designed <br class='max-md:hidden' /> to meet your business needs"
        textAlign={'center'}
      />

      <div className="flex flex-col gap-12 z-50">
        <Plans />
      </div>
    </SectionShell>
  )
}

export default PlanTierList
