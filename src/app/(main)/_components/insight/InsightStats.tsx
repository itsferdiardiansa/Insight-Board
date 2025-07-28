'use client'

import { useRef, useEffect } from 'react'
import { StatisticCard } from './StatisticCard'
import gsap from 'gsap'

export const InsightStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stat-card')

      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="mt-14 w-full max-md:mt-10 max-md:max-w-full"
    >
      <div className="stat-card opacity-0">
        <StatisticCard
          title="Revenue Trends"
          subtitle="Monthly growth analysis"
          value="+28%"
        />
      </div>

      <div className="stat-card mt-3 opacity-0">
        <StatisticCard
          title="User Engagement"
          subtitle="Active daily users"
          value="12.5K"
        />
      </div>

      <div className="stat-card mt-3 opacity-0">
        <StatisticCard
          title="Customer Retention"
          subtitle="Monthly retention rate"
          value="94%"
        />
      </div>
    </div>
  )
}
