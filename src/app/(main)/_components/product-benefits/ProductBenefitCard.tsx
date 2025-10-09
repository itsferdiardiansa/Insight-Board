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
        'flex flex-col bg-secondary max-lg:col-span-1! p-space-lg rounded-2xl opacity-0'
      )}
    >
      <div className="mb-space-xl lg:mb-24">
        <span className="text-4xl">{icon}</span>
      </div>

      <div className="flex flex-col gap-space-xs justify-start">
        <h2 className="text-heading-xl">{title}</h2>
        <p className="text-body-md md:text-body-lg text-subtle">
          {description}
        </p>
      </div>
    </div>
  )
})

ProductBenefitCard.displayName = 'ProductBenefitCard'
