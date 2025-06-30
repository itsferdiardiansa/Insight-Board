'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

import CitibanamexLogo from '@/assets/logo/partners/citibanamex.svg'
import AmazonLogo from '@/assets/logo/partners/amazon.svg'
import SpotifyLogo from '@/assets/logo/partners/spotify.svg'
import TNTSportsLogo from '@/assets/logo/partners/tnt-sports.svg'
import VodafoneLogo from '@/assets/logo/partners/vodafone.svg'
import ToyotaLogo from '@/assets/logo/partners/toyota.svg'

const partners = [
  { name: 'Amazon', logo: <AmazonLogo /> },
  { name: 'Citibanamex', logo: <CitibanamexLogo /> },
  { name: 'Spotify', logo: <SpotifyLogo /> },
  { name: 'TNT Sports', logo: <TNTSportsLogo /> },
  { name: 'Vodafone', logo: <VodafoneLogo /> },
  { name: 'Toyota', logo: <ToyotaLogo /> },
]

export const SocialProofPartners: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    })
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-hidden opacity-0">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

      <div ref={trackRef} className="flex w-max gap-12 px-2">
        {[...partners, ...partners].map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="w-20 md:w-24 flex items-center justify-center overflow-hidden shrink-0 transition-all"
            title={item.name}
          >
            <div className="w-16 md:w-20">{item.logo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
