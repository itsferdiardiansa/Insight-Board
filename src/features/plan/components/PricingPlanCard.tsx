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
            'bg-white border border-default',
            'h-full relative flex flex-col p-8 justify-between rounded-2xl cursor-pointer hover:scale-[1.03] duration-200',
            isRecommended && 'bg-linear-to-tl from-violet-700 to-violet-500'
          )}
        >
          <div>
            <div
              className={cn(
                'flex z-0 flex-col pb-5 w-full border-b border-solid',
                isRecommended ? 'border-b-accent-violet' : 'border-b-default'
              )}
            >
              <div className="w-full">
                <h2
                  className={cn(
                    'text-heading-3xl font-black!',
                    isRecommended && 'text-inverse'
                  )}
                >
                  {title}
                </h2>
                <p
                  className={cn(
                    'mt-space-xs text-body-md md:text-body-lg font-medium! leading-6',
                    !isRecommended ? 'text-subtle' : 'text-inverse/90'
                  )}
                >
                  {subtitle}
                </p>
              </div>

              <div className="relative flex gap-space-sm items-center self-start mt-space-md whitespace-nowrap">
                <div
                  ref={priceRef}
                  className={cn(
                    'h-[45px] overflow-hidden text-heading-4xl',
                    isRecommended && 'text-inverse'
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
                    isRecommended && 'text-inverse'
                  )}
                >
                  /month
                </p>
              </div>
            </div>

            <div
              className={cn(
                'w-full flex flex-col z-0',
                isRecommended && 'text-inverse'
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

          <div className="mt-space-2xl flex flex-col z-0 bottom-[33px]">
            <Button
              variant={isRecommended ? 'light' : 'secondary'}
              size="md"
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
