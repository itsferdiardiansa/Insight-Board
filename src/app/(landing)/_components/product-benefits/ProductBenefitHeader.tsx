'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Badge } from '@/components/ui/badge'

export type ProductBenefitHeaderProps = {
  title: string
  subtitle: string
}

export const ProductBenefitHeader: React.FC<ProductBenefitHeaderProps> = ({
  title,
  subtitle,
}) => {
  const badgeRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: badgeRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <div ref={badgeRef} className="max-lg:mx-auto opacity-0">
        <Badge variant={'ghost'}>Features</Badge>
      </div>

      <div className="mt-(--space-md) flex flex-col lg:flex-row justify-between gap-(--space-sm) md:gap-(--space-lg) text-center lg:text-left">
        <h1
          ref={titleRef}
          className="heading-display max-lg:basis-[50%] shrink-0 opacity-0"
        >
          {title}
        </h1>
        <h2 ref={descRef} className="heading-sub xl:max-w-sm opacity-0">
          {subtitle}
        </h2>
      </div>
    </div>
  )
}
