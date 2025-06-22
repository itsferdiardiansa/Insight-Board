import { cn } from '@/utils/tailwind'
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
>(({ icon, title, description }, ref) => {
  return (
    <article
      ref={ref}
      className="flex flex-col rounded-2xl p-4 md:p-8 gap-4 lg:gap-6 opacity-0 bg-violet-50"
    >
      <div className="flex flex-col items-center gap-4 lg:gap-6">
        <div className={cn('p-2 lg:p-3 rounded-full bg-violet-600')}>
          {icon}
        </div>

        <div className="flex flex-col self-stretch text-center">
          <h2 className="text-2xl font-semibold text-neutral-800">{title}</h2>
          <p className="mt-2 text-neutral-500">{description}</p>
        </div>
      </div>
    </article>
  )
})

ProductBenefitCard.displayName = 'ProductBenefitCard'
