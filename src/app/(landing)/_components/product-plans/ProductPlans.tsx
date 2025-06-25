'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Plans } from '@/features/plan/components/Plans'

const ProductPlans: React.FC = () => {
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
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="content-block">
      <div className="flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 ref={titleRef} className="heading-display opacity-0">
            Unlock your business potential
          </h1>
          <h2 ref={descRef} className="heading-sub opacity-0">
            Join thousands of companies scaling their business with our powerful
            solutions
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <Plans />
        </div>
      </div>
    </div>
  )
}

export default ProductPlans
