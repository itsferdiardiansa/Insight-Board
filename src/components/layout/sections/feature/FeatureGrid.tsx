'use client'

import { ReactNode, useEffect, useRef } from 'react'
import Link from 'next/link'
import Lottie from 'lottie-react'
import gsap from 'gsap'
import Image, { type StaticImageData } from 'next/image'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { SectionShell, SectionHeader } from '@/components/layout/sections'
import { Button } from '@/components/ui/button'
import { BadgeProps } from '@/components/ui/badge'
import { SectionShellProps } from '../SectionShell'
import { cn } from '@/utils/tailwind'

interface FeatureItem {
  title: string
  description: string
  icon?: ReactNode
}

interface FeatureGridProps {
  title: string
  subtitle: string
  badgeLabel?: string
  badgeVariant?: BadgeProps['variant']
  badgeIcon?: BadgeProps['icon']
  badgeClassName?: BadgeProps['className']
  imageSrc?: StaticImageData
  imageMeta?: string
  animationData?: object
  animationClassName?: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  featureList?: FeatureItem[]
  direction?: SectionShellProps['direction']
  responsiveDirection?: SectionShellProps['responsiveDirection']
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  title,
  subtitle,
  badgeLabel,
  badgeVariant = 'ghost',
  badgeIcon,
  badgeClassName,
  imageSrc,
  imageMeta = 'Default meta image',
  animationData,
  animationClassName,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  featureList = [],
  direction,
  responsiveDirection,
}) => {
  const imageRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      const xInitialValue = direction === 'rowReverse' ? 100 : -100
      gsap.fromTo(
        imageRef.current,
        { x: xInitialValue, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      )
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      )
    }
  }, [direction])

  return (
    <SectionShell
      direction={direction}
      responsiveDirection={responsiveDirection}
    >
      <div
        ref={imageRef}
        className="flex-1 flex items-center relative rounded-xl overflow-hidden bg-gradient-to-br from-violet-200 via-purple-200 to-violet-400 opacity-0"
      >
        {imageSrc && (
          <Image
            className="w-full h-full object-cover"
            src={imageSrc}
            alt={imageMeta}
            width={990}
            height={760}
          />
        )}

        {animationData && (
          <Lottie
            className={cn(
              'md:absolute bottom-0 w-full h-auto',
              animationClassName
            )}
            animationData={animationData}
            loop
          />
        )}
      </div>

      <div className="flex-1 flex flex-col gap-(--space-xl) py-(--space-lg)">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          badgeLabel={badgeLabel}
          badgeVariant={badgeVariant}
          badgeIcon={badgeIcon}
          badgeClassName={badgeClassName}
          textAlign="left"
        />

        {featureList.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--space-lg)">
            {featureList.map((feature, index) => (
              <div key={index} className="flex items-start gap-(--space-sm)">
                <div className="w-6 h-6 text-white bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                  {feature.icon || (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div ref={ctaRef} className="flex gap-(--space-sm) opacity-0">
          <Button
            variant="secondary"
            icon={<HiArrowTopRightOnSquare />}
            iconPosition="right"
            asChild
          >
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
          {secondaryCtaText && secondaryCtaHref && (
            <Button variant="outlineSecondary" asChild>
              <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </SectionShell>
  )
}
