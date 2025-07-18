'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { SectionShell } from '@/components/layout/sections'

const PricingCallout: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const quoteRef = useRef<HTMLQuoteElement | null>(null)
  const authorRef = useRef<HTMLParagraphElement | null>(null)
  const ctaRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current) return

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
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

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
          },
        }
      )

      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        authorRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.6,
          scrollTrigger: {
            trigger: authorRef.current,
            start: 'top 85%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell innerClassName="bg-violet-700 text-white rounded-4xl px-6 py-10 lg:px-16 lg:py-14 shadow-md">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <div className="flex-1">
          <div className="space-y-4">
            <h2 ref={titleRef} className="text-2xl lg:text-6xl font-semibold">
              Get started with InsightBoard Teams
            </h2>
            <p ref={descRef} className="text-base lg:text-xl text-white/80">
              Unlock advanced analytics and secure collaboration for high-impact
              teams.
            </p>
          </div>

          <div className="mt-4">
            <Button ref={ctaRef} variant="light" asChild>
              <Link href="/signup">Start for Free</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:justify-end justify-center">
          <blockquote ref={quoteRef} className="text-white/80 mt-4 text-4xl">
            “InsightBoard allows us to focus on outcomes, not just reports —
            it&apos;s changed the way we make decisions.”
          </blockquote>
          <p ref={authorRef} className="text-white/60 font-medium mt-2">
            Jimmy Chen, Head of Strategy at Flows
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

export default PricingCallout
