'use client'
import * as React from 'react'
import { FeaturedTestimonial } from './FeaturedTestimonial'
import { IndustryLeaders } from './IndustryLeaders'

import ChristinaWocin from '@/assets/leaders/christina-wocin.jpg'
import SarahCorneli from '@/assets/leaders/sarah-corneli.jpg'
import ChristianBuehner from '@/assets/leaders/christian-buehner.jpg'
import VickyHladynets from '@/assets/leaders/vicky-hladynets.jpg'

const testimonials = [
  {
    imageSrc: ChristianBuehner,
    name: 'Christian Buehner',
    role: 'Sr Software Engineer',
    testimonial:
      'Incredible platform that has streamlined our entire workflow. The real-time features are game-changing.',
  },
  {
    imageSrc: SarahCorneli,
    name: 'Sarah Corneli',
    role: 'Sr Project Manager',
    testimonial:
      'Incredible platform that has streamlined our entire workflow. The real-time features are game-changing.',
  },
  {
    imageSrc: VickyHladynets,
    name: 'Vicky Hladynets',
    role: 'VP',
    testimonial:
      'Incredible platform that has streamlined our entire workflow. The real-time features are game-changing.',
  },
]

const Testimonials: React.FC = () => {
  return (
    <div className="bg-green-50">
      <div className="layout-wrapper">
        <div className="content-block">
          <div className="flex justify-center">
            <h1 className="heading-display">What Our Customers Say</h1>
          </div>

          <FeaturedTestimonial
            imageSrc={ChristinaWocin}
            name="Sarah Johnson"
            role="Head of Product"
            testimonial="The collaboration features have transformed how our team works. We're more efficient and connected than ever before. The platform has become an essential part of our daily operations, enabling seamless communication across all departments."
          />

          <IndustryLeaders testimonials={testimonials} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
