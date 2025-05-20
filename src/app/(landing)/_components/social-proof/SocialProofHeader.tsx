'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const SocialProofHeader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll('[data-animate]')

      if (!elements) return

      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col gap-4" ref={containerRef}>
      <div className="mx-auto" data-animate>
        <Badge variant="danger">Partners</Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="heading-display" data-animate>
          More than
          <span className="text-purple-800 mx-2">13,000</span>
          teams use
        </h1>
        <h2 className="heading-sub" data-animate>
          Boost revenue, gain insights that help you grow and scale faster
        </h2>
      </div>
    </div>
  )
}
