'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { ErrorDisplayType } from './ErrorDisplay'

export const ErrorDisplayContent: React.FC<
  Omit<ErrorDisplayType, 'isRounded'>
> = ({ title, subTitle, pageType }) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const errorCodeRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play pause play complete',
      },
      defaults: { ease: 'power3.out', duration: 0.8 },
    })

    tl.fromTo(
      errorCodeRef.current,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, overwrite: 'auto' }
    )
      .fromTo(titleRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1 },
        '-=0.6'
      )
  }, [sectionRef])

  return (
    <div ref={sectionRef} className="order-2 md:order-1">
      <div className="relative flex flex-col text-center">
        <div className="inset-0 m-auto flex items-center justify-center">
          <p
            ref={errorCodeRef}
            className="text-[6rem] md:text-[12rem] text-white/30 font-black opacity-0"
          >
            {pageType === 'error' ? '500' : '400'}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1
            ref={titleRef}
            className="heading-display text-neutral-100! opacity-0"
          >
            {title}
          </h1>
          <p
            ref={descRef}
            className="max-w-md heading-sub mx-auto text-neutral-300! opacity-0"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </div>
      </div>

      {pageType === 'not-found' && (
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center mt-8 opacity-0"
        >
          <Button variant="secondary" size={'md'} pill asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
