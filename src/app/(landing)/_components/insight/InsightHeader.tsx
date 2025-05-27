'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Badge } from '@/components/ui/badge'

export const InsightHeader: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: badgeRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        )
      }

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
              toggleActions: 'play none none none',
              once: true,
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
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={badgeRef}>
        <Badge variant={'primary'}>Data Insights</Badge>
      </div>

      <header className="mt-4 flex flex-col gap-4">
        <h1 ref={titleRef} className="heading-display">
          Transform raw data into actionable strategies
        </h1>
        <h2 ref={descRef} className="heading-sub">
          Our advanced analytics platform helps you understand your business
          metrics at a glance with intuitive visualizations.
        </h2>
      </header>
    </>
  )
}
