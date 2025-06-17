'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface CollaborationHeaderProps {
  title: string
  description: string
}

export const CollaborationHeader: React.FC<CollaborationHeaderProps> = ({
  title,
  description,
}) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <header className="max-w-full">
      <div className="mt-4 flex flex-col gap-4 text-center md:text-left">
        <h1 ref={titleRef} className="heading-display opacity-0">
          {title}
        </h1>
        <h2 ref={descRef} className="heading-sub opacity-0">
          {description}
        </h2>
      </div>
    </header>
  )
}
