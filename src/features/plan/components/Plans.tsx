'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PlanCard } from './PlanCard'
import { BillingSelector } from './BillingSelector'
import productPlans from '../data/product-plans'

export const Plans = () => {
  const billingRef = useRef<HTMLDivElement | null>(null)
  const cardContainerRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (billingRef.current) {
        gsap.fromTo(
          billingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: billingRef.current,
              start: 'top 90%',
            },
          }
        )
      }

      if (cardContainerRef.current) {
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
              trigger: cardContainerRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={billingRef} className="flex justify-center opacity-0">
        <BillingSelector />
      </div>

      <div
        ref={cardContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 justify-start"
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
    </>
  )
}
