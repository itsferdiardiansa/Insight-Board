'use client'

import * as React from 'react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

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
  <span>
    <span className="font-bold">Everything in {title}, plus:</span>
  </span>
)

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
  const [displayPrice, setDisplayPrice] = useState(
    priceFormatted(price, isAnnual)
  )
  const priceRef = useRef<HTMLDivElement>(null)
  const prevPriceRef = useRef(price)

  useEffect(() => {
    const newPrice = +priceFormatted(price, isAnnual)
    const oldPrice = prevPriceRef.current
    const direction = newPrice > oldPrice ? 1 : -1

    const wrapper = priceRef.current
    if (!wrapper) return

    const fromY = direction > 0 ? '100%' : '-100%'
    const toY = '0%'

    const tempPrice = priceFormatted(newPrice, isAnnual)

    gsap.fromTo(
      wrapper,
      { y: fromY, opacity: 0 },
      {
        y: toY,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onStart: () => setDisplayPrice(tempPrice),
      }
    )

    prevPriceRef.current = newPrice
  }, [isAnnual, price])

  const differences = previousPlan
    ? getPlanDifferences(previousPlan, { title, subtitle, price, features })
    : []

  return (
    <div className="w-full xl:min-w-[322px]">
      <div
        className={cn(
          'bg-gray-100',
          'h-full relative flex flex-col p-8 justify-between rounded-2xl cursor-pointer hover:scale-[1.03] duration-200',
          {
            'bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900':
              isRecommended,
          }
        )}
      >
        <div>
          <div className="flex z-0 flex-col pb-5 w-full border-b border-solid border-b-neutral-500">
            <div className="w-full">
              <h2
                className={cn('text-3xl font-black', {
                  'text-neutral-100': isRecommended,
                })}
              >
                {title}
              </h2>
              <p
                className={cn('mt-1.5 text-base leading-6', {
                  'text-neutral-200': isRecommended,
                })}
              >
                {subtitle}
              </p>
            </div>

            <div className="flex gap-4 items-center self-start mt-5 whitespace-nowrap h-[50px]">
              <div
                ref={priceRef}
                className={cn(
                  'relative w-full h-[34px] overflow-hidden self-stretch my-auto text-5xl font-bold',
                  {
                    'text-neutral-100': isRecommended,
                  }
                )}
              >
                <p className="opacity-0">${displayPrice}</p>
                <div className="absolute left-0 top-0 w-full text-5xl font-bold transition-transform">
                  ${displayPrice}
                </div>
              </div>
              <p
                className={cn('self-stretch my-auto text-base', {
                  'text-neutral-200': isRecommended,
                })}
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
