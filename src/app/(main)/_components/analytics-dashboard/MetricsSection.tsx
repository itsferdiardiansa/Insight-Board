'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { StatisticItem } from './StatisticItem'

export const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('[data-animate]') || []

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="flex overflow-hidden flex-col items-start py-2.5 mt-6 w-full max-md:max-w-full"
    >
      <div className="opacity-0" data-animate>
        <StatisticItem value="85%" label="Customer Satisfaction" />
      </div>
      <div className="mt-5 opacity-0" data-animate>
        <StatisticItem value="2.4M" label="Active monthly users" />
      </div>
      <div className="mt-5 opacity-0" data-animate>
        <StatisticItem value="5.8X" label="Market growth rate" />
      </div>
    </div>
  )
}
