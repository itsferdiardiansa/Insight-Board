'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CitibanamexLogo from '@/assets/partners/citibanamex.svg'
import AmazonLogo from '@/assets/partners/amazon.svg'
import SpotifyLogo from '@/assets/partners/spotify.svg'
import TNTSportsLogo from '@/assets/partners/tnt-sports.svg'
import VodafoneLogo from '@/assets/partners/vodafone.svg'
import ToyotaLogo from '@/assets/partners/toyota.svg'

gsap.registerPlugin(ScrollTrigger)

export const SocialProofPartners: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll('[data-animate]')

      if (!elements) return

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="flex flex-col items-center gap-8 lg:gap-18"
      ref={sectionRef}
    >
      <h3
        className="text-xl font-semibold text-center text-neutral-500"
        data-animate
      >
        Trusted by industry leaders
      </h3>

      <div className="flex-1 flex max-lg:flex-wrap gap-12 justify-center items-center">
        <AmazonLogo className="w-1/4" data-animate />
        <CitibanamexLogo className="w-1/4" data-animate />
        <SpotifyLogo className="w-1/4" data-animate />
        <TNTSportsLogo className="w-1/4" data-animate />
        <VodafoneLogo className="w-1/4" data-animate />
        <ToyotaLogo className="w-1/4" data-animate />
      </div>
    </div>
  )
}
