'use client'
import * as React from 'react'
import ProductPlanCard from './PlanCard'
import { BillingSelector } from './BillingSelector'

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
  return (
    <div className="layout-wrapper">
      <div className="content-block flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col items-center gap-4">
          <h1 className="heading-display">Unlock your business potential</h1>
          <h2 className="heading-sub">
            Join thousands of companies scaling their business with our powerful
            solutions
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex justify-center">
            <BillingSelector />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {productPlans.map((item, index) => (
              <ProductPlanCard {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPlans
