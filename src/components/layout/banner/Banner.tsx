'use client'

import React, { PropsWithChildren, useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { Button, ButtonProps } from '@/components/ui/button'
import { SectionHeaderProps } from '../sections/SectionHeader'
import { type BannerImageProps, BannerImage } from './BannerImage'
import { cn } from '@/utils/tailwind'

type NodePropsChildren = {
  props: {
    children: React.ReactNode
  }
}

type AnyComp = { displayName?: string }

type CTAType = {
  label?: string
} & ButtonProps

export type BannerProps = {
  header?: SectionHeaderProps
  ctas?: CTAType[]
  image?: BannerImageProps
  className?: string
} & PropsWithChildren

export const BannerContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="relative">{children}</div>
}
BannerContent.displayName = 'BannerContent'

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

  const contentNodeRef = useRef<React.ReactNode | null>(null)
  const imageNodeRef = useRef<React.ReactNode | null>(null)

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) return
    const t = child.type as AnyComp

    if (
      child.type === BannerImageSlot ||
      t?.displayName === 'BannerImageSlot'
    ) {
      imageNodeRef.current = (child as NodePropsChildren).props.children
      return
    }

    if (child.type === BannerContent || t?.displayName === 'BannerContent') {
      contentNodeRef.current = (child as NodePropsChildren).props.children
    }
  })

  useEffect(() => {
    // const tl = gsap.timeline()
    // if (imageRef.current) {
    //   tl.fromTo(
    //     imageRef.current,
    //     {
    //       opacity: 0,
    //       rotateX: 18,
    //       transformPerspective: 990,
    //       transformOrigin: 'center bottom',
    //     },
    //     {
    //       opacity: 1,
    //       rotateX: 0,
    //       y: 0,
    //       duration: 1.4,
    //       ease: 'power2.out',
    //       scrollTrigger: {
    //         trigger: imageRef.current,
    //         start: 'top 85%',
    //         end: 'top 40%',
    //         scrub: 4,
    //       },
    //     }
    //   )
    // }
  }, [])

  return (
    <SectionShell
      className={cn('content-block--py', className)}
      direction="col"
    >
      <div className="flex flex-col items-center gap-(--space-lg) md:gap-(--space-2xl)">
        {contentNodeRef.current ? (
          contentNodeRef.current
        ) : (
          <SectionHeader {...headerProps} />
        )}

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

      {imageNodeRef.current ? (
        imageNodeRef.current
      ) : (
        <div ref={imageRef} className="lid-op">
          <BannerImage {...(imageProps as BannerImageProps)} />
        </div>
      )}
    </SectionShell>
  )
}

export const Banner = BannerComponent as React.FC<BannerProps> & {
  Content: typeof BannerContent
  Image: typeof BannerImageSlot
}

Banner.Content = BannerContent
Banner.Image = BannerImageSlot
