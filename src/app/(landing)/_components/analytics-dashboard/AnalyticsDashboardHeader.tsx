'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Badge } from '@/components/ui/badge'

export const AnalyticsDashboardHeader: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: badgeRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <header className="flex flex-col pb-6 w-full border-b border-solid border-b-neutral-100 max-md:max-w-full">
      <div ref={badgeRef} className="self-start max-md:mx-auto opacity-0">
        <Badge variant="ghost">Analytics Dashboard</Badge>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-center md:text-left">
        <h1 ref={titleRef} className="heading-display opacity-0">
          Custom reports that guide your decision making
        </h1>
        <h2 ref={descRef} className="heading-sub opacity-0">
          Transform complex data into clear, actionable insights with our
          powerful reporting tools
        </h2>
      </div>
    </header>
  )
}
