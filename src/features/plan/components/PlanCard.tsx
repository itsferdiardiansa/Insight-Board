'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { useRef } from 'react'

import { FeatureList } from './FeatureList'
import { Button } from '@/components/ui/button'
import productPlans from '@/features/plan/data/product-plans'
import type { Plan } from '@/features/plan/data/product-plans'
import { useBilling } from '@/context/billing/BillingContext'
import { priceFormatted } from '../utils/priceFormatter'
import { cn } from '@/utils/tailwind'

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

const FeatureListTitle = ({ title }: { title: string }) => (
  <span className="font-bold">Everything in {title}, plus:</span>
)

export const PlanCard = forwardRef<HTMLDivElement, PlanCardProps>(
  ({ title, subtitle, price, features, isRecommended = false }, ref) => {
    const { isAnnual } = useBilling()
    const planIndex = productPlans.findIndex(plan => plan.title === title)
    const previousPlan = productPlans[planIndex - 1]
    const isBasePlan = planIndex === 0
    const priceRef = useRef<HTMLDivElement>(null)

    const differences = previousPlan
      ? getPlanDifferences(previousPlan, { title, subtitle, price, features })
      : []

    return (
      <div ref={ref} className="w-full xl:min-w-[322px] opacity-0">
        <div
          className={cn(
            'bg-gray-100',
            'h-full relative flex flex-col p-8 justify-between rounded-2xl cursor-pointer hover:scale-[1.03] duration-200',
            isRecommended &&
              'bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900'
          )}
        >
          <div>
            <div className="flex z-0 flex-col pb-5 w-full border-b border-solid border-b-neutral-500">
              <div className="w-full">
                <h2
                  className={cn(
                    'text-3xl font-black',
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

              <div className="flex gap-4 items-center self-start mt-5 whitespace-nowrap">
                <div
                  ref={priceRef}
                  className={cn(
                    'price text-5xl font-bold',
                    isRecommended && 'text-neutral-100'
                  )}
                >
                  <span className="relative block overflow-hidden h-[36px]">
                    <span
                      className={cn(
                        'block transition-transform duration-300 ease-in-out',
                        isAnnual ? '-translate-y-[50%]' : 'translate-y-[0]'
                      )}
                    >
                      <span className="block">
                        ${priceFormatted(price, false)}
                      </span>
                      <span className="block">
                        ${priceFormatted(price, true)}
                      </span>
                    </span>
                  </span>
                  {/* <p className="opacity-0">${displayPrice}</p>
                <div className="absolute left-0 top-0 w-full text-5xl font-bold transition-transform">
                  ${displayPrice}
                </div> */}
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
                'z-0 w-full flex flex-col',
                isRecommended ? 'text-neutral-100' : 'text-neutral-800'
              )}
            >
              {isBasePlan ? (
                features.map((group, idx) => (
                  <FeatureList
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
                <FeatureList
                  title={<FeatureListTitle title={title} />}
                  features={differences}
                  isRecommended={isRecommended}
                />
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col z-0 bottom-[33px]">
            <Button
              size="md"
              variant={isRecommended ? 'secondary' : 'dark'}
              pill={false}
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

PlanCard.displayName = 'PlanCard'
