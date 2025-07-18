'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { SiDatabricks } from 'react-icons/si'
import { MetricsSection } from './MetricsSection'
import { SectionHeader, SectionShell } from '@/components/layout/sections'

import AnalyzerImage from '@/assets/images/regrouping.jpg'
import TodayTransactionsImage from '@/assets/illustrations/today-transactions.png'

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
    <SectionShell direction={'col'} responsiveDirection={'mdRow'}>
      <div className="flex-1 self-stretch">
        <SectionHeader
          title="Custom reports that guide your decision making"
          subtitle="Transform complex data into clear, actionable insights with our powerful reporting tools"
          badgeLabel="Analytics Dashboard"
          badgeIcon={<SiDatabricks />}
          textAlign="center"
          responsiveTextAlign="mdLeft"
        />
        <MetricsSection />
      </div>

      <div className="relative w-full min-h-[410px] lg:min-h-[610px] flex-1">
        <Image
          ref={imageRef}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl overflow-hidden opacity-0"
          src={AnalyzerImage}
          width={500}
          height={800}
          alt="Analytics Dashboard Visualization"
        />

        <Image
          ref={secondImageRef}
          className="absolute max-w-60 bottom-[5%] left-[5%] opacity-0"
          src={TodayTransactionsImage}
          alt="Today transactions"
        />
      </div>
    </SectionShell>
  )
}

export default AnalyticsDashboard
