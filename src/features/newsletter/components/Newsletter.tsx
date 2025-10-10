'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/form/input'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'

const newsletterVariants = cva('', {
  variants: {
    variant: {
      horizontal: 'flex-col md:flex-row',
      vertical: 'flex-col',
    },
    formLayout: {
      horizontal: 'md:flex-[.5] flex-row',
      vertical: 'flex-col [&>*]:flex-1 items-stretch',
    },
  },
})

export interface NewsletterProps
  extends VariantProps<typeof newsletterVariants> {
  isAnimate?: boolean
  disabled?: boolean
}

export const Newsletter: React.FC<NewsletterProps> = ({
  variant = 'horizontal',
  formLayout = 'horizontal',
  disabled,
  isAnimate,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAnimate) return

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
  }, [isAnimate])

  return (
    <div
      ref={sectionRef}
      className={cn('flex gap-sm md:gap-md', newsletterVariants({ variant }))}
    >
      <div className="flex-1 flex flex-col items-start gap-sm">
        <h2
          ref={headingRef}
          className={cn('text-heading-4xl', isAnimate && 'opacity-0')}
        >
          Stay in the loop
        </h2>

        <p
          ref={paragraphRef}
          className={cn('max-w-xl text-heading-lg text-subtle font-light! mt-space-xs mb-6', isAnimate && 'opacity-0')}
        >
          Subscribe to our newsletter and get the latest product updates,
          insights, and exclusive offers directly to your inbox.
        </p>
      </div>

      <div
        ref={formRef}
        className={cn(
          'flex justify-center items-center gap-space-md',
          newsletterVariants({ formLayout }),
          isAnimate && 'opacity-0'
        )}
      >
        <Input type="email" label="Enter your email" disabled={disabled} fullWidth />
        <Button variant="secondary" type="submit" disabled={disabled}>
          Subscribe
        </Button>
      </div>
    </div>
  )
}
