'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CollaborationHeaderProps {
  title: string
  description: string
}

export const CollaborationHeader: React.FC<CollaborationHeaderProps> = ({
  title,
  description,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header ref={containerRef} className="max-w-full">
      <h2
        ref={titleRef}
        className="text-5xl font-bold leading-[53px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
      >
        {title}
      </h2>
      <p
        ref={descRef}
        className="mt-4 text-lg leading-6 text-neutral-500 max-md:max-w-full"
      >
        {description}
      </p>
    </header>
  )
}
