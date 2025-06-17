'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { AnalyticsDashboardHeader } from './AnalyticsDashboardHeader'
import { MetricsSection } from './MetricsSection'
import AnalyzerImage from '@/assets/regrouping.jpg'

const AnalyticsDashboard: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current) return

      gsap.fromTo(
        imageRef.current,
        { x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, imageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="content-block">
      <div className="flex flex-col md:flex-row gap-12 xl:gap-32">
        <div className="flex-1 self-stretch">
          <AnalyticsDashboardHeader />
          <MetricsSection />
        </div>

        <div
          ref={imageRef}
          className="relative w-full min-h-[410px] lg:min-h-[610px] flex-1 rounded-2xl overflow-hidden opacity-0"
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={AnalyzerImage}
            width={300}
            height={500}
            alt="Analytics Dashboard Visualization"
          />
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
