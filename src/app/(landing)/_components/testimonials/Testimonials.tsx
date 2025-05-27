'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FeaturedTestimonial } from './FeaturedTestimonial'
import { IndustryLeaders } from './IndustryLeaders'

import ChristinaWocin from '@/assets/leaders/christina-wocin.jpg'
import SarahCorneli from '@/assets/leaders/sarah-corneli.jpg'
import ChristianBuehner from '@/assets/leaders/christian-buehner.jpg'
import VickyHladynets from '@/assets/leaders/vicky-hladynets.jpg'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    imageSrc: ChristianBuehner,
    name: 'Christian Buehner',
    role: 'Sr Software Engineer',
    testimonial:
      'InsightBoard drastically improved our deployment flow. Real-time dashboards and integrations make debugging a breeze.',
  },
  {
    imageSrc: SarahCorneli,
    name: 'Sarah Corneli',
    role: 'Sr Project Manager',
    testimonial:
      'Managing multiple teams has never been smoother. InsightBoard brings clarity to complex project timelines.',
  },
  {
    imageSrc: VickyHladynets,
    name: 'Vicky Hladynets',
    role: 'VP of Growth',
    testimonial:
      'The analytics features helped us uncover hidden patterns in our user journey. Our conversion rates have soared.',
  },
]

const Testimonials: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
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
    <section className="bg-green-50">
      <div className="layout-wrapper">
        <div className="content-block">
          <div className="flex justify-center mb-10">
            <h1 ref={headingRef} className="heading-display text-center">
              What Our Customers Say
            </h1>
          </div>

          <div>
            <FeaturedTestimonial
              imageSrc={ChristinaWocin}
              name="Sarah Johnson"
              role="Head of Product"
              testimonial="The collaboration features have transformed how our team works. We're more efficient and connected than ever before. The platform has become an essential part of our daily operations, enabling seamless communication across all departments."
            />
          </div>

          <div ref={listRef}>
            <IndustryLeaders testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
