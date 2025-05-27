'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Statistics } from './Statistics'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

const ConversionBanner: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const buttonsRef = useRef<HTMLDivElement | null>(null)

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
            delay: 0.1,
            scrollTrigger: {
              trigger: descRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 90%',
            },
          }
        )
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: 'top 90%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-violet-800 via-violet-600 to-purple-500 overflow-hidden">
      <div className="layout-wrapper">
        <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute top-[-80px] right-[-180px] w-96 h-96 bg-white/10 rounded-full" />

        <div className="content-block relative flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex-col">
            <div className="flex flex-col">
              <h1
                ref={titleRef}
                className="text-4xl lg:text-5xl font-bold text-neutral-50"
              >
                Ready to get started? Unlock the tools to accelerate your
                growth.
              </h1>

              <p
                ref={descRef}
                className="mt-4 lg:mt-8 text-base lg:text-lg leading-7 text-neutral-50"
              >
                Transform your business with powerful analytics and real-time
                insights. Join over 13,000 successful teams already using
                InsightBoard to drive their growth and success.
              </p>
            </div>

            <div ref={statsRef} className="mt-8">
              <Statistics />
            </div>
          </div>

          <div
            ref={buttonsRef}
            className="flex-1 flex items-center justify-start lg:justify-center gap-4"
          >
            <Button variant={'secondary'} size={'lg'} pill asChild>
              <Link href={'/signin'}>Get Started Now</Link>
            </Button>

            <Button variant={'primary'} size={'lg'} pill asChild>
              <Link href={'/free-demo'}>Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversionBanner
