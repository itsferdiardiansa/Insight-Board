'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cn } from '@/utils/tailwind'
import { firstGroup, secondGroup } from './social-proof-data'

export const SocialProofPartners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstGroupRefs = useRef<(HTMLDivElement | null)[]>([])
  const secondGroupRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const HOLD = 3
      const GAP = 0.2
      const DUR = 0.5
      const STAG = 0.15

      gsap.set(firstGroupRefs.current, { opacity: 0, y: 40 })
      gsap.set(secondGroupRefs.current, { opacity: 0, y: -30 })

      const anime1 = gsap.fromTo(
        firstGroupRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: DUR,
          stagger: STAG,
          ease: 'power3.out',
          onComplete: () => {
            gsap.delayedCall(HOLD, () => {
              gsap.to(firstGroupRefs.current, {
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
        secondGroupRefs.current,
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
              gsap.to(secondGroupRefs.current, {
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
    <div ref={containerRef} className="w-full relative overflow-hidden">
      <div className="h-[60px] flex flex-col items-center justify-center transition-all">
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-(--space-sm) justify-center">
          {firstGroup.map((partner, i) => {
            const Logo = partner.logo

            return (
              <div
                key={`${partner.name}-${i}`}
                className={cn(
                  'flex items-center justify-center rounded-xl px-(--space-lg) py-(--space-sm) shrink-0 opacity-0 bg-(--sescondary)',
                  'max-sm:[&:nth-child(n+4)]:hidden max-lg:[&:nth-child(n+5)]:hidden'
                )}
                ref={el => {
                  firstGroupRefs.current[i] = el
                }}
                title={partner.name}
              >
                <div className="flex items-center">
                  <Logo className="w-18 sm:w-28 text-(--secondary)" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-(--space-sm) justify-center">
          {secondGroup.map((partner, i) => {
            const Logo = partner.logo

            return (
              <div
                key={`${partner.name}-${i}`}
                className={cn(
                  'flex items-center justify-center rounded-xl px-(--space-lg) py-(--space-sm) shrink-0 opacity-0 bg-(--sescondary)',
                  'max-sm:[&:nth-child(n+4)]:hidden max-lg:[&:nth-child(n+5)]:hidden'
                )}
                ref={el => {
                  secondGroupRefs.current[i] = el
                }}
                title={partner.name}
              >
                <div className="flex items-center">
                  <Logo className="w-18 sm:w-28 text-(--secondary)" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
