'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { useRef } from 'react'

import { PricingPlanFeatures } from './PricingPlanFeatures'
import { Button } from '@/components/ui/button'
import subscriptionPlans from '@/constants/subscription-plans'
import { usePricing } from '@/context/pricing/PricingContext'
import { BILLING_DISCOUNTS } from '@/constants/billing'
import { getPlanDifferences } from '../_utils/plan-filter'
import { formatCurrency } from '@/utils/number-formatter'
import { cn } from '@/utils/tailwind'

type PricingPlanCardProps = {
  isRecommended?: boolean
  index?: number
} & (typeof subscriptionPlans)[number]

export const PricingPlanCard = forwardRef<HTMLDivElement, PricingPlanCardProps>(
  ({ id, title, subtitle, price, features, isRecommended = false }, ref) => {
    const { isAnnual } = usePricing()
    const priceRef = useRef<HTMLDivElement>(null)
    const planIndex = subscriptionPlans.findIndex(plan => plan.title === title)
    const previousPlan = subscriptionPlans[planIndex - 1]
    const isBasePlan = planIndex === 0
    const annualDiscountRate = BILLING_DISCOUNTS['annual']
    const discountedAnnualPrice = price * (1 - annualDiscountRate)

    const differences = previousPlan
      ? getPlanDifferences(previousPlan, {
          id,
          title,
          subtitle,
          price,
          features,
        })
      : []

    return (
      <div ref={ref} className="relative w-full xl:min-w-[322px] opacity-0">
        <div
          className={cn(
            'bg-white border border-gray-200',
            'h-full relative flex flex-col p-8 justify-between rounded-2xl cursor-pointer hover:scale-[1.03] duration-200',
            isRecommended && 'bg-linear-to-tl from-violet-700 to-violet-500'
          )}
        >
          <div>
            <div
              className={cn(
                'flex z-0 flex-col pb-5 w-full border-b border-solid',
                isRecommended
                  ? 'border-b-(--primary-hover)'
                  : 'border-b-gray-200'
              )}
            >
              <div className="w-full">
                <h2
                  className={cn(
                    'text-5xl font-black',
                    isRecommended && 'text-neutral-100'
                  )}
                >
                  {title}
                </h2>
                <p
                  className={cn(
                    'mt-1.5 text-lg leading-6',
                    isRecommended && 'text-neutral-200'
                  )}
                >
                  {subtitle}
                </p>
              </div>

              <div className="relative flex gap-(--space-sm) items-center self-start mt-5 whitespace-nowrap">
                <div
                  ref={priceRef}
                  className={cn(
                    'h-[36px] overflow-hidden text-5xl font-bold',
                    isRecommended && 'text-neutral-100'
                  )}
                >
                  <span
                    className={cn(
                      'block transition-transform duration-300 ease-in-out',
                      isAnnual ? '-translate-y-[50%]' : 'translate-y-[0]'
                    )}
                  >
                    <span className="block">{formatCurrency(price)}</span>
                    <span className="block">
                      {formatCurrency(discountedAnnualPrice)}
                    </span>
                  </span>
                </div>
                <p
                  className={cn(
                    'self-stretch my-auto text-base',
                    isRecommended && 'text-neutral-200'
                  )}
                >
                  /month
                </p>
              </div>
            </div>

            <div
              className={cn(
                'z-0 w-full flex flex-col font-semibold',
                isRecommended ? 'text-neutral-100' : 'text-neutral-800'
              )}
            >
              {isBasePlan ? (
                features.map((group, idx) => (
                  <PricingPlanFeatures
                    key={idx}
                    isRecommended={isRecommended}
                    features={group.items
                      .filter(item => item.value !== false)
                      .map(item =>
                        typeof item.value === 'boolean' ? item.name : item.value
                      )}
                  />
                ))
              ) : (
                <PricingPlanFeatures
                  title={previousPlan.title}
                  features={differences}
                  isRecommended={isRecommended}
                />
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col z-0 bottom-[33px]">
            <Button
              variant={isRecommended ? 'outlineSecondary' : 'secondary'}
              className={cn(
                isRecommended &&
                  'bg-white outline-white hover:bg-white hover:outline-white hover:text-(--secondary)'
              )}
              size="lg"
              asChild
            >
              <Link href={'/subscriptions'}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }
)

PricingPlanCard.displayName = 'PricingPlanCard'
