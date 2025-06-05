'use client'

import * as React from 'react'
import Link from 'next/link'
import { RecommendedBadge } from './RecommendedBadge'
import { FeatureList } from './FeatureList'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'
import productPlans from '@/features/plan/data/product-plans'
import type { Plan } from '@/features/plan/data/product-plans'
import { useBilling } from '@/context/billing/BillingContext'
import { priceFormatted } from '../utils/priceFormatter'

type PlanCardProps = {
  isRecommended?: boolean
  index?: number
} & (typeof productPlans)[number]

const getPlanDifferences = (previous: Plan, current: Plan): string[] => {
  const differences: string[] = []

  current.features.forEach(currentGroup => {
    const prevGroup = previous.features.find(
      g => g.group === currentGroup.group
    )

    currentGroup.items.forEach(item => {
      const prevItem = prevGroup?.items.find(i => i.name === item.name)

      if (!prevItem || prevItem.value !== item.value) {
        if (item.value === false) return
        const formatted =
          typeof item.value === 'boolean' ? item.name : item.value
        differences.push(formatted)
      }
    })
  })

  return differences
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  price,
  features,
  isRecommended = false,
}) => {
  const { isAnnual } = useBilling()
  const planIndex = productPlans.findIndex(plan => plan.title === title)
  const previousPlan = productPlans[planIndex - 1]
  const isBasePlan = planIndex === 0
  const displayPrice = priceFormatted(price, isAnnual)

  const differences = previousPlan
    ? getPlanDifferences(previousPlan, { title, subtitle, price, features })
    : []

  return (
    <article className="w-full flex-1 lg:max-w-[322px]">
      <div
        className={cn(
          'h-full relative flex flex-col p-6 justify-between rounded-2xl border border-solid border-gray-200 hover:bg-violet-50 hover:border-violet-800 cursor-pointer',
          {
            'bg-violet-50': isRecommended,
            'border-violet-800': isRecommended,
          }
        )}
      >
        {isRecommended && <RecommendedBadge />}

        <div>
          <header className="flex z-0 flex-col pb-5 w-full border-b border-solid border-b-neutral-200">
            <div className="w-full">
              <h2 className="text-3xl font-black text-neutral-900">{title}</h2>
              <p className="mt-1.5 text-base leading-6 text-neutral-500">
                {subtitle}
              </p>
            </div>
            <div className="flex gap-4 items-center self-start mt-5 whitespace-nowrap h-[50px]">
              <p className="self-stretch my-auto text-5xl font-bold text-neutral-900">
                {displayPrice}
              </p>
              <p className="self-stretch my-auto text-base text-neutral-500">
                /month
              </p>
            </div>
          </header>

          <div className="z-0 w-full flex flex-col">
            {isBasePlan ? (
              features.map((group, idx) => (
                <FeatureList
                  key={idx}
                  features={group.items
                    .filter(item => item.value !== false)
                    .map(item =>
                      typeof item.value === 'boolean' ? item.name : item.value
                    )}
                />
              ))
            ) : (
              <FeatureList
                title={
                  <span>
                    <span className="font-bold">
                      Everything in {previousPlan.title}, plus:
                    </span>
                  </span>
                }
                features={differences}
              />
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col z-0 bottom-[33px]">
          <Button size="lg" pill={false} asChild>
            <Link href={'/subscriptions'}>Get Started</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
