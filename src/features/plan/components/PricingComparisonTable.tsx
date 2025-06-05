'use client'

import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi'
import { cn } from '@/utils/tailwind'
import productPlans from '@/features/plan/data/product-plans'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const allGroups = Array.from(
  new Set(productPlans.flatMap(plan => plan.features.map(f => f.group)))
)

const groupFeatures = (group: string) => {
  const featuresSet = new Map<string, Set<string | boolean>>()

  productPlans.forEach(plan => {
    plan.features
      .filter(feature => feature.group === group)
      .forEach(feature => {
        feature.items.forEach(item => {
          if (!featuresSet.has(item.name)) {
            featuresSet.set(item.name, new Set())
          }
          featuresSet.get(item.name)?.add(item.value)
        })
      })
  })

  return Array.from(featuresSet.keys())
}

const getFeatureValue = (
  plan: (typeof productPlans)[number],
  group: string,
  feature: string
): string | boolean => {
  const groupData = plan.features.find(f => f.group === group)
  return groupData?.items.find(item => item.name === feature)?.value ?? false
}

export const PricingComparisonTable: React.FC = () => {
  return (
    <div className="w-full overflow-auto border border-gray-200 rounded-xl">
      <div className="min-w-[900px]">
        <div className="grid grid-cols-[1.5fr_repeat(3,_1fr)] bg-gray-50 font-semibold text-sm text-neutral-800 rounded-t-xl">
          <div className="px-6 py-4 text-left text-lg font-bold">Features</div>
          {productPlans.map((plan, i) => (
            <div key={i} className="px-6 py-4 text-center text-lg font-bold">
              {plan.title}
            </div>
          ))}
        </div>

        {allGroups.map(group => (
          <React.Fragment key={group}>
            <div className="bg-gray-50 font-bold uppercase px-6 py-3 text-neutral-800">
              {group}
            </div>

            {groupFeatures(group).map((feature, idx) => {
              const isEven = idx % 2 === 1
              return (
                <div
                  key={feature}
                  className={cn(
                    'grid grid-cols-[1.5fr_repeat(3,_1fr)] items-center',
                    isEven ? 'bg-gray-50' : 'bg-white'
                  )}
                >
                  <div className="px-6 py-3 text-neutral-700">{feature}</div>

                  {productPlans.map((plan, index) => {
                    const value = getFeatureValue(plan, group, feature)
                    const isBool = typeof value === 'boolean'

                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center py-3"
                      >
                        {isBool ? (
                          <div
                            className={cn(
                              'w-6 h-6 rounded-full flex items-center justify-center',
                              value
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-300 text-white'
                            )}
                          >
                            {value ? (
                              <FiCheck className="font-bold" size={16} />
                            ) : (
                              <FiX className="font-bold" size={16} />
                            )}
                          </div>
                        ) : (
                          <span className="font-medium text-neutral-700">
                            {value}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </React.Fragment>
        ))}

        <div className="grid grid-cols-[1.5fr_repeat(3,_1fr)] bg-gray-50 rounded-b-xl border-t border-gray-200">
          <div className="px-6 py-5 text-left font-medium text-neutral-700">
            &nbsp;
          </div>
          {productPlans.map((_, i) => (
            <div key={i} className="flex justify-center items-center py-5">
              <Button asChild>
                <Link href={'/subscription'}>Get Started Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
