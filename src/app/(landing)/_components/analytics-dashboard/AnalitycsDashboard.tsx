'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { AnalyticsDashboardHeader } from './AnalyticsDashboardHeader'
import { MetricsSection } from './MetricsSection'
import AnalyzerImage from '@/assets/regrouping.jpg'

gsap.registerPlugin(ScrollTrigger)

const AnalyticsDashboard: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current) return

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
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
    <div className="content-block flex flex-col lg:flex-row flex-wrap gap-12 lg:gap-32 items-center">
      <div className="flex-1 self-stretch my-auto">
        <AnalyticsDashboardHeader />
        <MetricsSection />
      </div>

      <div
        ref={imageRef}
        className="relative w-full min-h-[410px] lg:min-h-[610px] flex-1 shrink self-stretch rounded-2xl overflow-hidden"
      >
        <Image
          className="w-full absolute top-0 bottom-0 left-0 my-auto object-contain"
          src={AnalyzerImage}
          alt="Analytics Dashboard Visualization"
        />
      </div>
    </div>
  )
}

export default AnalyticsDashboard
