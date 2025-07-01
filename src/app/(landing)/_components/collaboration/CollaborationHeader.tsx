'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type CollaborationHeaderProps = {
  title: string
  subTitle: string
  description: string
}

export const CollaborationHeader: React.FC<CollaborationHeaderProps> = ({
  title,
  subTitle,
  description,
}) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)
  const desc2Ref = useRef<HTMLParagraphElement | null>(null)

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
              start: 'top 80%',
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
              start: 'top 80%',
              once: true,
            },
          }
        )
      }

      if (desc2Ref.current) {
        gsap.fromTo(
          desc2Ref.current,
          { opacity: 0, y: -40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: desc2Ref.current,
              start: 'top 80%',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col gap-(--space-sm)">
      <h1 ref={titleRef} className="heading-display text-neutral-50! opacity-0">
        {title}
      </h1>

      <h2
        ref={descRef}
        className="text-xl xl:text-3xl text-neutral-200 font-semibold xl:mt-4 opacity-0"
      >
        {subTitle}
      </h2>

      <p
        ref={desc2Ref}
        className="text-lg xl:text-xl text-neutral-300 opacity-0"
      >
        {description}
      </p>
    </div>
  )
}
