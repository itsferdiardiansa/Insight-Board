'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

export const InsightHeader: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the badge
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

      // Animate the heading
      const h1 = headerRef.current?.querySelector('h1')
      const p = headerRef.current?.querySelector('p')

      if (h1) {
        gsap.fromTo(
          h1,
          { opacity: 0, y: -40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: h1,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        )
      }

      if (p) {
        gsap.fromTo(
          p,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: p,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        )
      }
    }, badgeRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={badgeRef}>
        <Badge variant={'primary'}>Data Insights</Badge>
      </div>

      <header ref={headerRef} className="mt-4 flex flex-col gap-4">
        <h1 className="heading-display">
          Transform raw data into actionable strategies
        </h1>
        <h2 className="heading-sub">
          Our advanced analytics platform helps you understand your business
          metrics at a glance with intuitive visualizations.
        </h2>
      </header>
    </>
  )
}
