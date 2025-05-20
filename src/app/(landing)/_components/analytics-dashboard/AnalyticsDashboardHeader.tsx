'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'

gsap.registerPlugin(ScrollTrigger)

export const AnalyticsDashboardHeader: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const [badge, heading, subheading] =
        headerRef.current?.querySelectorAll('[data-animate]') || []

      gsap.fromTo(
        badge,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        heading,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        subheading,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="flex flex-col pb-6 w-full border-b border-solid border-b-neutral-100 max-md:max-w-full"
    >
      <div className="self-start" data-animate>
        <Badge variant="success">Analytics Dashboard</Badge>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="heading-display" data-animate>
          Custom reports that guide your decision making
        </h1>
        <h2 className="heading-sub" data-animate>
          Transform complex data into clear, actionable insights with our
          powerful reporting tools
        </h2>
      </div>
    </header>
  )
}
