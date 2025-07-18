'use client'

import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PlanCard } from './PlanCard'
import productPlans from '../data/product-plans'

export const PLanList = forwardRef<HTMLDivElement>(() => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--space-md) lg:gap-(--space-lg) justify-start"
    >
      {productPlans.map((item, index) => (
        <PlanCard
          key={index}
          ref={(element: HTMLDivElement) => {
            cardsRef.current[index] = element
          }}
          {...item}
        />
      ))}
    </div>
  )
})

PLanList.displayName = 'PLanList'
