'use client'

import Link from 'next/link'
import { FiCheck, FiX } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { useBilling } from '@/context/billing/BillingContext'
import { cn } from '@/utils/tailwind'
import { priceFormatted } from '../utils/priceFormatter'
import productPlans from '@/features/plan/data/product-plans'

export const PricingComparisonTable = () => {
  const { isAnnual } = useBilling()

  const allGroups = Array.from(
    new Set(productPlans.flatMap(plan => plan.features.map(f => f.group)))
  )

  const allFeatures = allGroups.map(group => ({
    group,
    items: Array.from(
      new Set(
        productPlans.flatMap(plan =>
          plan.features
            .filter(f => f.group === group)
            .flatMap(f => f.items.map(i => i.name))
        )
      )
    ),
  }))

  const getFeatureValue = (
    plan: (typeof productPlans)[number],
    group: string,
    item: string
  ) => {
    const foundGroup = plan.features.find(f => f.group === group)
    return foundGroup?.items.find(i => i.name === item)?.value ?? false
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[900px] border border-gray-100 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1.5fr_repeat(3,_1fr)] border-b border-gray-100">
          <div className="p-6"></div>
          {productPlans.map(plan => (
            <div
              key={plan.title}
              className={cn(
                'p-6 text-center flex flex-col items-center gap-2',
                plan.title === 'Professional' && 'bg-gray-100'
              )}
            >
              <p className="text-lg font-semibold">{plan.title}</p>
              <p className="text-4xl font-black">
                ${+priceFormatted(plan.price, isAnnual)}
              </p>
              <span className="font-bold text-sm text-neutral-500">/month</span>

              <Button
                className="mt-4 gap-2"
                variant="secondary"
                icon={<FaArrowRight />}
                iconPosition="right"
                asChild
              >
                <Link href="/subscription">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {allFeatures.map(({ group, items }) => (
          <div key={group} className="text-lg">
            <div className="grid grid-cols-[1.5fr_repeat(3,_1fr)] border-t border-gray-200">
              <div className="p-4 font-semibold text-lg text-neutral-800 col-span-2">
                {group}
              </div>
              <div className="p-4 bg-gray-100"></div>
            </div>

            {items.map(item => (
              <div
                key={item}
                className="grid grid-cols-[1.5fr_repeat(3,_1fr)] border-t border-gray-100"
              >
                <div className="p-4 text-neutral-700">{item}</div>

                {productPlans.map(plan => {
                  const value = getFeatureValue(plan, group, item)
                  const isBool = typeof value === 'boolean'
                  const isPro = plan.title === 'Professional'

                  return (
                    <div
                      key={plan.title + item}
                      className={cn(
                        'p-4 flex justify-center',
                        isPro && 'bg-gray-100'
                      )}
                    >
                      {isBool ? (
                        <div
                          className={cn(
                            'w-5 h-5 rounded-full flex items-center justify-center text-white',
                            value ? 'bg-violet-700' : 'bg-gray-300'
                          )}
                        >
                          {value ? <FiCheck size={14} /> : <FiX size={14} />}
                        </div>
                      ) : (
                        <span className="text-neutral-700">{value}</span>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
