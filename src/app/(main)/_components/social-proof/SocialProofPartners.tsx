'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

import CitibanamexLogo from '@/assets/logo/partners/citibanamex.svg'
import AmazonLogo from '@/assets/logo/partners/amazon.svg'
import SpotifyLogo from '@/assets/logo/partners/spotify.svg'
import TNTSportsLogo from '@/assets/logo/partners/tnt-sports.svg'
import VodafoneLogo from '@/assets/logo/partners/vodafone.svg'
import ToyotaLogo from '@/assets/logo/partners/toyota.svg'
import FramerLogo from '@/assets/logo/partners/framer.svg'
import BehanceLogo from '@/assets/logo/partners/behance.svg'
import PaypalLogo from '@/assets/logo/partners/paypal.svg'
import ZapierLogo from '@/assets/logo/partners/zapier.svg'
import DigitalOceanLogo from '@/assets/logo/partners/digital-ocean.svg'
import RedditLogo from '@/assets/logo/partners/reddit.svg'
import { cn } from '@/utils/tailwind'

const partners = [
  { name: 'Amazon', logo: <AmazonLogo className="w-18 sm:w-28 fill-white!" /> },
  {
    name: 'Citibanamex',
    logo: <CitibanamexLogo className="w-18 sm:w-28 fill-white!" />,
  },
  {
    name: 'Spotify',
    logo: <SpotifyLogo className="w-18 sm:w-28 fill-white!" />,
  },
  {
    name: 'TNT Sports',
    logo: <TNTSportsLogo className="w-18 sm:w-28 fill-white!" />,
  },
  {
    name: 'Vodafone',
    logo: <VodafoneLogo className="w-18 sm:w-28 fill-white!" />,
  },
  { name: 'Toyota', logo: <ToyotaLogo className="w-18 sm:w-28 fill-white!" /> },
  { name: 'Framer', logo: <FramerLogo className="w-18 sm:w-28 fill-white!" /> },
  {
    name: 'Behance',
    logo: <BehanceLogo className="w-18 sm:w-28 fill-white!" />,
  },
  { name: 'Reddit', logo: <RedditLogo className="w-18 sm:w-28 fill-white!" /> },
  { name: 'Paypal', logo: <PaypalLogo className="w-18 sm:w-28 fill-white!" /> },
  { name: 'Zapier', logo: <ZapierLogo className="w-18 sm:w-28 fill-white!" /> },
  {
    name: 'DigitalOcean',
    logo: <DigitalOceanLogo className="w-18 sm:w-28 fill-white!" />,
  },
]

const firstBatch = partners.slice(0, 6)
const secondBatch = partners.slice(6)

export const SocialProofPartners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const groupOneRefs = useRef<(HTMLDivElement | null)[]>([])
  const groupTwoRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const HOLD = 3
      const GAP = 0.2
      const DUR = 0.5
      const STAG = 0.15

      gsap.set(groupOneRefs.current, { opacity: 0, y: 40 })
      gsap.set(groupTwoRefs.current, { opacity: 0, y: 0 })

      const anime1 = gsap.fromTo(
        groupOneRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: DUR,
          stagger: STAG,
          ease: 'power3.out',
          onComplete: () => {
            gsap.delayedCall(HOLD, () => {
              gsap.to(groupOneRefs.current, {
                opacity: 0,
                y: 40,
                duration: DUR,
                stagger: STAG,
                ease: 'power3.out',
              })

              gsap.delayedCall(GAP, () => anime2.restart())
            })
          },
        }
      )

      const anime2 = gsap.fromTo(
        groupTwoRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: DUR,
          stagger: STAG,
          ease: 'power3.out',
          paused: true,
          onComplete: () => {
            gsap.delayedCall(HOLD, () => {
              gsap.to(groupTwoRefs.current, {
                opacity: 0,
                y: 40,
                duration: DUR,
                stagger: STAG,
                ease: 'power3.out',
              })

              gsap.delayedCall(GAP, () => anime1.restart())
            })
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full relative bg-(--secondary) overflow-hidden"
    >
      <div className="h-[60px] flex flex-col items-center justify-center transition-all">
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-(--space-sm) justify-center">
          {firstBatch.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={cn(
                'flex items-center justify-center rounded-xl px-(--space-lg) py-(--space-sm) shrink-0 opacity-0',
                'max-sm:[&:nth-child(n+4)]:hidden max-lg:[&:nth-child(n+5)]:hidden'
              )}
              ref={el => {
                groupOneRefs.current[i] = el
              }}
              title={item.name}
            >
              <div className="text-neutral-50">{item.logo}</div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-(--space-sm) justify-center">
          {secondBatch.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className={cn(
                'flex items-center justify-center rounded-xl px-(--space-lg) py-(--space-sm) shrink-0 opacity-0',
                'max-sm:[&:nth-child(n+4)]:hidden max-lg:[&:nth-child(n+5)]:hidden'
              )}
              ref={el => {
                groupTwoRefs.current[i] = el
              }}
              title={item.name}
            >
              <div className="w-24 md:w-28 text-neutral-50">{item.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
