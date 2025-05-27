'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProductPlanCard from './PlanCard'
import { BillingSelector } from './BillingSelector'

gsap.registerPlugin(ScrollTrigger)

const productPlans = [
  {
    title: 'Starter',
    subtitle: 'Perfect for individuals and small teams getting started',
    price: '$29',
    features: [
      {
        title: 'Core Features',
        list: [
          'Up to 10 team members',
          '5GB Storage',
          'Basic analytical dashboard',
        ],
      },
      {
        title: 'Collaboration',
        list: ['Shared worksapces', 'Basic task management', 'Email support'],
      },
    ],
  },
  {
    title: 'Professional',
    subtitle: 'Scale your business with advanced features and support',
    isRecommended: true,
    price: '$79',
    features: [
      {
        title: 'Everything in starter, plus',
        list: ['Up to 50 team members', '50GB storage', 'Advanced analytics'],
      },
      {
        title: 'Advanced Features',
        list: ['Custom workflows', 'Priority support', 'API access'],
      },
    ],
  },
  {
    title: 'Enterprise',
    subtitle: 'Custom solutions for large-scale organizations',
    price: '$149',
    features: [
      {
        title: 'Everything in profesional, plus',
        list: [
          'Unlimitted team members',
          'Unlimitted storage',
          'Custom analytics solutions',
        ],
      },
      {
        title: 'dedicated Features',
        list: [
          '24/7 dedicated support',
          'Custom integrations',
          'Dedicated success manager',
        ],
      },
    ],
  },
]

const ProductPlans: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement | null>(null)
  const descRef = React.useRef<HTMLHeadingElement | null>(null)
  const billingRef = React.useRef<HTMLDivElement | null>(null)
  const cardsRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
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
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
            },
          }
        )
      }

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
    <div className="layout-wrapper">
      <div className="content-block flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col items-center gap-4">
          <h1 ref={titleRef} className="heading-display">
            Unlock your business potential
          </h1>
          <h2 ref={descRef} className="heading-sub">
            Join thousands of companies scaling their business with our powerful
            solutions
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <div ref={billingRef} className="flex justify-center">
            <BillingSelector />
          </div>

          <div
            ref={cardsRef}
            className="flex flex-col lg:flex-row gap-12 items-stretch"
          >
            {productPlans.map((item, index) => (
              <ProductPlanCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPlans
