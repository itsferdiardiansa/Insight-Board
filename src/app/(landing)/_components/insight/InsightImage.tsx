'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

import EngementsMetricIllustration from '@/assets/illustrations/user-engagements-metric.png'
import { FabricLayer } from '@/components/ui/fabric-layer'

export const InsightImage: React.FC = () => {
  const metricsRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current,
          { opacity: 0, bottom: '-90%' },
          {
            opacity: 1,
            bottom: '-8rem',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full relative">
      <FabricLayer className="w-full h-full absolute top-0 left-0" />
      <Image
        src={EngementsMetricIllustration}
        ref={metricsRef}
        className="w-[320px] md:w-[380px] lg:w-3/4 absolute bottom-0 left-0 right-0 mx-auto object-contain opacity-0"
        alt="Data insights visualization"
      />
    </div>
  )
}
