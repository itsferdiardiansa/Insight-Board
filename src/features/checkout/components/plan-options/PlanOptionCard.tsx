'use client'

import { forwardRef } from 'react'
import { PlanOptionFeatures } from './PlanOptionFeatures'
import { getPlanDifferences } from '@/features/plan/_utils/plan-filter'
import subscriptionPlans from '@/constants/subscription-plans'
import { useCheckout } from '@/context/checkout/CheckoutContext'
import { formatCurrency, shortenNumber } from '@/utils/number-formatter'
import { cn } from '@/utils/tailwind'

const currencyRates: Record<string, number> = {
  usd: 1,
  eur: 0.92,
  gbp: 0.78,
  idr: 16000,
  jpy: 155,
}

type PlanOptionCardProps = {
  isActive?: boolean
  index?: number
} & (typeof subscriptionPlans)[number]

export const PlanOptionCard = forwardRef<HTMLDivElement, PlanOptionCardProps>(
  ({ id, title, subtitle, price, features, isActive = false }, ref) => {
    const {
      plan: { isAnnual, currency },
    } = useCheckout()
    const planIndex = subscriptionPlans.findIndex(plan => plan.title === title)
    const previousPlan = subscriptionPlans[planIndex - 1]
    const isBasePlan = planIndex === 0

    const rate = currencyRates[currency] ?? 1
    const convertedPrice = price * rate
    const annualDiscountRate = 0.15
    const annualPrice = convertedPrice
    const discountedAnnualPrice = annualPrice * (1 - annualDiscountRate)

    const displayPrice = (price: number, currency: string) => {
      if (currency === 'idr') {
        return `${currency.toUpperCase()}${shortenNumber(price)}`
      }
      return formatCurrency(price, currency)
    }

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
      <div
        ref={ref}
        className={cn(
          'w-full h-full border flex flex-col p-(--space-md) cursor-pointer',
          isActive
            ? 'bg-violet-100 border-(--primary)'
            : 'bg-transparent border-gray-300 text-neutral-800 hover:border-violet-400'
        )}
      >
        <div>
          <div className="w-full flex flex-col pb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-1 text-base">{subtitle}</p>

            <div className="flex flex-col gap-(--space-sm) mt-4">
              <div className="flex flex-col items-start">
                {isAnnual && (
                  <span className="text-neutral-500 line-through">
                    {displayPrice(annualPrice, currency)}
                  </span>
                )}
                <div className="flex items-end">
                  <div className="price">
                    <span className="relative text-4xl font-black">
                      {isAnnual
                        ? displayPrice(discountedAnnualPrice, currency)
                        : displayPrice(convertedPrice, currency)}
                    </span>
                  </div>
                  <p className="ml-(--space-sm)">
                    {currency.toUpperCase()}/{isAnnual ? 'year' : 'month'}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base">
                  Billed {isAnnual ? 'Annually' : 'Monthly'}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col font-medium">
            {isBasePlan ? (
              features.map((group, idx) => (
                <PlanOptionFeatures
                  key={idx}
                  isRecommended={isActive}
                  features={group.items
                    .filter(item => item.value !== false)
                    .map(item =>
                      typeof item.value === 'boolean' ? item.name : item.value
                    )}
                />
              ))
            ) : (
              <PlanOptionFeatures
                title={title}
                features={differences}
                isRecommended={isActive}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
)

PlanOptionCard.displayName = 'PlanOptionCard'
