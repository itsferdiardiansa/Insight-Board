'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { PowerfullSolutionsHeader } from './PowerfullSolutionsHeader'
import { Features } from './Features'
import AnalyzerImage from '@/assets/dedicated.jpg'

function PowerfullSolutions() {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const hrRef = useRef<HTMLHRElement | null>(null)

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            // toggleActions: 'play none none',
            once: true,
          },
        }
      )
    }

    if (hrRef.current) {
      gsap.fromTo(
        hrRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: hrRef.current,
            start: 'top 90%',
            once: true,
            // toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  return (
    <div className="content-block">
      <div className="flex flex-col md:flex-row gap-12 xl:gap-32">
        <div className="flex-1 flex flex-col justify-center">
          <PowerfullSolutionsHeader />
          <hr
            ref={hrRef}
            className="lg:w-8/12 my-8 h-1 bg-gray-50 border-0 scale-x-0 opacity-0"
          />
          <Features />
        </div>

        <div
          ref={imageRef}
          className="relative min-h-[410px] lg:min-h-[610px] flex-1 rounded-2xl overflow-hidden opacity-0"
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={AnalyzerImage}
            width={500}
            height={600}
            alt="Analytics Dashboard Visualization"
          />
        </div>
      </div>
    </div>
  )
}

export default PowerfullSolutions
