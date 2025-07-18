'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { IndustryLeaders } from './IndustryLeaders'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import testimonials from '../data/testimonials-data'

export const Testimonials: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLHeadingElement | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
          },
        }
      )
    }

    if (listRef.current) {
      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, [])

  return (
    <SectionShell direction={'col'}>
      <SectionHeader
        title="Trusted by 45,000+ Customers"
        subtitle="Discover the Powerful Features That Make InsightBoard the Ultimate SaaS <br class='max-md:hidden' /> Solution for Your Business"
        textAlign={'center'}
      />

      <div ref={listRef} className="opacity-0">
        <IndustryLeaders testimonials={testimonials} />
      </div>
    </SectionShell>
  )
}
