'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

import ManageRawData from '@/assets/images/manage-data.jpg'

export const InsightImage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <Image
      ref={imageRef}
      src={ManageRawData}
      className="absolute inset-0 object-cover opacity-0"
      alt="Data insights visualization"
      width={590}
      height={885}
    />
  )
}
