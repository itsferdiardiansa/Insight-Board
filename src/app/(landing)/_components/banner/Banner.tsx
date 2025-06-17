'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { BannerContent } from './BannerContent'
import { BannerCTA } from './BannerCTA'
import { BannerImage } from './BannerImage'

const Banner: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })

    tl.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 80,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          gsap.to(imageRef.current, {
            y: '-=10',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        },
      },
      '-=0.6'
    )
  }, [])

  return (
    <div className="layout-wrapper flex flex-col justify-end items-center">
      <div className="content-block w-full flex flex-col items-center gap-12 pb-0! text-center">
        <div className="flex flex-col items-center gap-8">
          <BannerContent />

          <div className="opacity-0 translate-y-12" ref={ctaRef}>
            <BannerCTA />
          </div>
        </div>

        <div ref={imageRef} className="w-full opacity-0">
          <div className="floating-image">
            <BannerImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
