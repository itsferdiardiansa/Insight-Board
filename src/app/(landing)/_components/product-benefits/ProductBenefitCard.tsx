import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'
import Link from 'next/link'
import React, { forwardRef } from 'react'

export interface ProductBenefitCardProps {
  icon: React.ReactNode
  iconBgColor: string
  title: string
  description: string
}

export const ProductBenefitCard = forwardRef<
  HTMLDivElement,
  ProductBenefitCardProps
>(({ icon, iconBgColor, title, description }, ref) => {
  return (
    <article
      ref={ref}
      className="flex flex-col items-center justify-between gap-4 lg:gap-6 opacity-0"
    >
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className={cn('p-2 lg:p-3 mx-auto rounded-lg', iconBgColor)}>
          {icon}
        </div>

        <hr className="w-1/2 lg:w-full mx-auto border-gray-100 border border-solid min-h-px" />

        <div className="flex flex-col self-stretch w-full text-center">
          <h2 className="text-2xl font-semibold text-neutral-800">{title}</h2>
          <p className="mt-2 text-base leading-7 text-neutral-500">
            {description}
          </p>
        </div>
      </div>

      <Button size={'md'} variant={'secondary'} asChild pill>
        <Link href="#" className="flex gap-2 items-center text-purple-800">
          <span className="text-base">Learn more</span>
        </Link>
      </Button>
    </article>
  )
})

ProductBenefitCard.displayName = 'ProductBenefitCard'
