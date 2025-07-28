'use client'

import React, { PropsWithChildren, useRef } from 'react'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { Button, ButtonProps } from '@/components/ui/button'
import { SectionHeaderProps } from '../sections/SectionHeader'
import { type BannerImageProps, BannerImage } from './BannerImage'
import { cn } from '@/utils/tailwind'
import { extractSlots } from '@/utils/slots'

type CTAType = {
  label?: string
} & ButtonProps

export type BannerProps = {
  header?: SectionHeaderProps
  ctas?: CTAType[]
  image?: BannerImageProps
  className?: string
} & PropsWithChildren

export const BannerContentSlot: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <div className="relative">{children}</div>
}
BannerContentSlot.displayName = 'BannerContentSlot'

export const BannerImageSlot: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>
}
BannerImageSlot.displayName = 'BannerImageSlot'

const BannerComponent: React.FC<BannerProps> = ({
  header: headerProps,
  ctas,
  image: imageProps,
  className,
  children,
}) => {
  const imageRef = useRef<HTMLDivElement>(null)
  const { slots } = extractSlots(children, {
    Content: BannerContentSlot,
    Image: BannerImageSlot,
  })

  return (
    <SectionShell
      className={cn('content-block--py', className)}
      direction="col"
    >
      <div className="flex flex-col items-center gap-(--space-lg) md:gap-(--space-2xl)">
        {slots.Content ? slots.Content : <SectionHeader {...headerProps} />}

        {Boolean(ctas?.length) && (
          <div className="flex gap-(--space-md) items-start max-w-full font-semibold">
            {ctas?.map((cta, index) => (
              <Button key={index} {...cta}>
                {cta.children ? cta.children : cta.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {slots.Image ? (
        slots.Image
      ) : (
        <div ref={imageRef} className="lid-op">
          <BannerImage {...(imageProps as BannerImageProps)} />
        </div>
      )}
    </SectionShell>
  )
}

export const Banner = BannerComponent as React.FC<BannerProps> & {
  Content: typeof BannerContentSlot
  Image: typeof BannerImageSlot
}

Banner.Content = BannerContentSlot
Banner.Image = BannerImageSlot
