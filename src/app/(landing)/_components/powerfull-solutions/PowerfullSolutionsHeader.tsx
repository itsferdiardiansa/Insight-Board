'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const PowerfullSolutionsHeader: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col lg:text-left gap-4">
      <h1 ref={titleRef} className="heading-display opacity-0">
        Transform your workflow with powerful solutions
      </h1>

      <h2 ref={descRef} className="heading-sub opacity-0">
        Self service data analytics software that makes you visually appealing
        data visualizations and insightful dashboards
      </h2>
    </div>
  )
}
