'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/form/input'

export const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out', duration: 1 },
      })

      tl.fromTo(
        headingRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1 }
      )
      tl.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.8'
      )
      tl.fromTo(
        formRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1 },
        '-=0.8'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="content-block content-block--py border-b border-gray-200"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex-1 flex flex-col items-start gap-4">
          <h2 ref={headingRef} className="heading-display mb-4 opacity-0">
            Stay in the loop
          </h2>

          <p ref={paragraphRef} className="heading-sub max-w-xl mb-6 opacity-0">
            Subscribe to our newsletter and get the latest product updates,
            insights, and exclusive offers directly to your inbox.
          </p>
        </div>

        <div
          ref={formRef}
          className="md:flex-[.5] flex flex-row justify-center items-center gap-2 opacity-0"
        >
          <Input type="email" label="Enter your email" fullWidth />
          <Button variant="dark" type="submit">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}
