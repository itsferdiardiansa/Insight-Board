'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Badge } from '@/components/ui/badge'

export interface ProductBenefitHeaderProps {
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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
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
    <div className="flex flex-col justify-center items-center gap-4 text-center">
      <div ref={badgeRef} className="self-start mx-auto opacity-0">
        <Badge variant={'ghost'}>Features</Badge>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 ref={titleRef} className="heading-display opacity-0">
          {title}
        </h1>
        <h2 ref={descRef} className="heading-sub xl:max-w-md  opacity-0">
          {subtitle}
        </h2>
      </div>
    </div>
  )
}
