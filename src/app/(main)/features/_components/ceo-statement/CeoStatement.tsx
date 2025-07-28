'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SectionShell } from '@/components/layout/sections'
import { cn } from '@/utils/tailwind'
import { siteConfig } from '@/config/site-config'

const text = `
  ${siteConfig.name} is more than just an analytics platform — it's a strategic partner that empowers your team to uncover patterns, forecast outcomes. 
`

export const CeoStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.1, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 40%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const wordList = text.split(' ')

  return (
    <SectionShell direction={'col'} gapSize={'sm'}>
      <div
        ref={containerRef}
        className="text-2xl md:text-6xl font-bold leading-relaxed text-neutral-800 text-center"
      >
        {wordList.map((word, i) => (
          <span
            key={i}
            ref={el => {
              if (el) wordsRef.current[i] = el
            }}
            className={cn(
              'inline-block mr-2 transition-opacity duration-300',
              word.toLowerCase().includes('insightboard')
                ? 'text-violet-700 font-bold'
                : ''
            )}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="text-lg text-neutral-600 text-center">
        — <strong>Ferdi Ardiansa</strong>, CEO of{' '}
        <span className="text-indigo-600">{siteConfig.name}</span>
      </div>
    </SectionShell>
  )
}
