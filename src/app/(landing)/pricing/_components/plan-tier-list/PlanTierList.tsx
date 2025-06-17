'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Plans } from '@/features/plan/components/Plans'
import { PlanTierComparison } from './PlanTierComparison'

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
    <div className="content-block">
      <div className="flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 ref={titleRef} className="heading-display">
            Choose the perfect plan for your business
          </h1>

          <h2 ref={descRef} className="heading-sub">
            Get started with our flexible pricing options designed to meet your
            business needs and scale with your growth
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <Plans />
        </div>

        <div className="flex flex-col gap-18">
          <PlanTierComparison />
        </div>
      </div>
    </div>
  )
}

export default PlanTierList
