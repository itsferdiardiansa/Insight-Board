'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { SectionHeader, SectionShell } from '@/components/layout/section'
import { Plans } from '@/features/plan/components/Plans'

const ProductPlans: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
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
    <SectionShell direction={'col'}>
      <SectionHeader
        title="Unlock your business potential"
        subtitle="Join thousands of companies scaling their business with our powerful solutions"
        textAlign={'center'}
      />

      <div className="flex flex-col gap-12">
        <Plans />
      </div>
    </SectionShell>
  )
}

export default ProductPlans
