'use client'

import * as React from 'react'
import Link from 'next/link'
import { RecommendedBadge } from './RecommendedBadge'
import { FeatureList } from './FeatureList'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'

type PlanHeaderProps = {
  title: string
  subtitle: string
  price: string
}

const PlanHeader: React.FC<PlanHeaderProps> = ({ title, subtitle, price }) => {
  return (
    <header className="flex z-0 flex-col pb-5 w-full border-b border-solid border-b-neutral-200">
      <div className="w-full">
        <h2 className="text-3xl font-black text-neutral-900">{title}</h2>
        <p className="mt-1.5 text-base leading-6 text-neutral-500">
          {subtitle}
        </p>
      </div>
      <div className="flex gap-4 items-center self-start mt-5 whitespace-nowrap h-[50px]">
        <p className="self-stretch my-auto text-5xl font-bold text-neutral-900">
          {price}
        </p>
        <p className="self-stretch my-auto text-base text-neutral-500">
          /month
        </p>
      </div>
    </header>
  )
}

type ProductPlanCardProps = {
  isRecommended?: boolean
  features: {
    title: string
    list: string[]
  }[]
} & PlanHeaderProps

export const ProductPlanCard: React.FC<ProductPlanCardProps> = ({
  title,
  subtitle,
  price,
  features,
  isRecommended = false,
}) => {
  return (
    <article className="w-full flex-1 lg:max-w-[322px]">
      <div
        className={cn(
          'h-full relative flex flex-col justify-between p-6 rounded-2xl border border-solid border-gray-200 hover:bg-violet-50 hover:border-violet-800 cursor-pointer',
          {
            'bg-violet-50': isRecommended,
            'border-violet-800': isRecommended,
          }
        )}
      >
        {isRecommended && <RecommendedBadge />}

        <div>
          <PlanHeader title={title} subtitle={subtitle} price={price} />

          <div className="z-0 mt-5 w-full flex flex-col gap-8">
            {features.map((item, index) => (
              <FeatureList
                key={index}
                title={item.title}
                features={item.list}
              />
            ))}
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

export default ProductPlanCard
