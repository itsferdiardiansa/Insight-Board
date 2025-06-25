import React, { forwardRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/utils/tailwind'

export type ProductBenefitCardProps = {
  title: string
  description: string
  span: number
  imageSrc: StaticImageData
}

export const ProductBenefitCard = forwardRef<
  HTMLDivElement,
  ProductBenefitCardProps
>(({ title, description, span = 1, imageSrc }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col rounded-2xl border border-gray-100 opacity-0 max-lg:col-span-1!'
      )}
      style={{
        gridColumn: `span ${span} / span ${span}`,
      }}
    >
      <div className="flex justify-start bg-gray-50 p-4">
        <div className="relative w-full aspect-[4/3] max-h-40 xl:max-h-60">
          <Image
            src={imageSrc}
            alt="Connect Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start p-4">
        <h2 className="text-xl lg:text-3xl font-semibold text-neutral-800">
          {title}
        </h2>
        <p className="mt-2 lg:text-lg text-neutral-500">{description}</p>
      </div>
    </div>
  )
})

ProductBenefitCard.displayName = 'ProductBenefitCard'
