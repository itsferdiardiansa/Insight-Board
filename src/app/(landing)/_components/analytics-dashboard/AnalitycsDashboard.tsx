'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { AnalyticsDashboardHeader } from './AnalyticsDashboardHeader'
import { MetricsSection } from './MetricsSection'
import AnalyzerImage from '@/assets/regrouping.jpg'
import TodayTransactionsImage from '@/assets/today-transactions.png'

const AnalyticsDashboard: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)
  const secondImageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
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
      }

      if (secondImageRef.current) {
        gsap.fromTo(
          secondImageRef.current,
          { y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: secondImageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
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

        <div className="relative w-full min-h-[410px] lg:min-h-[610px] flex-1">
          <Image
            ref={imageRef}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl overflow-hidden opacity-0"
            src={AnalyzerImage}
            width={300}
            height={500}
            alt="Analytics Dashboard Visualization"
          />

          <Image
            ref={secondImageRef}
            className="absolute scale-[1] bottom-[5%] left-[5%] opacity-0"
            src={TodayTransactionsImage}
            alt="Today transactions"
          />
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
