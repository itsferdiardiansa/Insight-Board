'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { StaticImageData } from 'next/image'
import { cn } from '@/utils/tailwind'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

interface Testimonial {
  imageSrc: StaticImageData
  name: string
  role: string
  testimonial: string
}

interface IndustryLeadersProps {
  testimonials: Testimonial[]
}

export const IndustryLeaders: React.FC<IndustryLeadersProps> = ({
  testimonials,
}) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
    mode: 'free-snap',
    slideChanged(s) {
      setCurrent(s.track.details.rel)
    },
  })

  const [current, setCurrent] = React.useState(0)

  return (
    <section className="mt-16 w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-neutral-800">
          Trusted by Industry Leaders
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => slider.current?.prev()}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition cursor-pointer"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition cursor-pointer"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="keen-slider__slide">
            <article className="p-6 bg-white rounded-xl">
              <header className="flex items-center gap-4">
                <Image
                  className="w-14 h-14 rounded-full object-cover"
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </header>
              <p className="mt-4 text-neutral-600">
                “{testimonial.testimonial}”
              </p>
            </article>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: testimonials.length - 2 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider.current?.moveToIdx(idx)}
            className={cn(
              'w-3 h-3 rounded-full transition',
              idx === current ? 'bg-green-800' : 'bg-green-200'
            )}
          />
        ))}
      </div>
    </section>
  )
}
