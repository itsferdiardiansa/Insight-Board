'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BillingProvider } from '@/context/billing/BillingContext'
import { PlanCard } from './PlanCard'
import { BillingSelector } from './BillingSelector'
import productPlans from '../data/product-plans'

export const Plans = () => {
  const billingRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)

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
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: billingRef.current,
              start: 'top 90%',
            },
          }
        )
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('article')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <BillingProvider>
      <div ref={billingRef} className="flex justify-center">
        <BillingSelector />
      </div>

      <div
        ref={cardsRef}
        className="flex flex-col lg:flex-row gap-12 items-stretch justify-center"
      >
        {productPlans.map((item, index) => (
          <PlanCard key={index} {...item} />
        ))}
      </div>
    </BillingProvider>
  )
}
