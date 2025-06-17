'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import gsap from 'gsap'

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
    <div ref={containerRef} className="flex flex-col gap-4">
      <div className="mx-auto opacity-0" data-animate>
        <Badge variant="danger">Partners</Badge>
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="heading-display opacity-0" data-animate>
          More than
          <span className="text-purple-800 mx-2">13,000</span>
          teams use
        </h1>
        <h2 className="heading-sub opacity-0" data-animate>
          Boost revenue, gain insights that help you grow and scale faster
        </h2>
      </div>
    </div>
  )
}
