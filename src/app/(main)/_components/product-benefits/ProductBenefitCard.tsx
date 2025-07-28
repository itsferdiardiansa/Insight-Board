import { forwardRef } from 'react'
import { type StaticImageData } from 'next/image'
import { cn } from '@/utils/tailwind'

export type ProductBenefitCardProps = {
  number: number
  title: string
  description: string
  span: number
  icon: React.ReactNode
  imageSrc: StaticImageData
}

export const ProductBenefitCard = forwardRef<
  HTMLDivElement,
  ProductBenefitCardProps
>(({ title, description, icon }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col bg-gray-100 max-lg:col-span-1! p-(--space-lg) rounded-2xl opacity-0'
      )}
    >
      <div className="mb-(--space-xl) lg:mb-24">
        <span className="text-4xl text-neutral-700">{icon}</span>
      </div>

      <div className="flex flex-col gap-(--space-sm) justify-start">
        <h2 className="text-xl lg:text-3xl font-semibold text-neutral-700">
          {title}
        </h2>
        <p className="mt-(--space-xs) text-lg text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  )
})

ProductBenefitCard.displayName = 'ProductBenefitCard'
