'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const PowerfullSolutionsHeader: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        'h2',
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
            // toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        'p',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true,
            // toggleActions: 'play none none reverse',
          },
        }
      )
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="flex flex-col text-center lg:text-left gap-4"
    >
      <h1 className="heading-display">
        Transform your workflow with powerful solutions
      </h1>

      <h2 className="heading-sub">
        Self service data analytics software that makes you visually appealing
        data visualizations and insightful dashboards
      </h2>
    </header>
  )
}
