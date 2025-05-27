'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import gsap from 'gsap'

interface FeaturedTestimonialProps {
  imageSrc: string | StaticImageData
  name: string
  role: string
  testimonial: string
}

export const FeaturedTestimonial: React.FC<FeaturedTestimonialProps> = ({
  imageSrc,
  name,
  role,
  testimonial,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const roleRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.4,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="mt-28 w-full max-md:mt-10 max-md:max-w-full"
    >
      <div className="flex gap-5 max-md:flex-col">
        <article ref={textRef} className="w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <header className="flex gap-3 items-center self-start">
              <div className="h-[45px] w-[46px] flex justify-center items-center bg-green-700 rounded-xl">
                <FaQuoteLeft className="text-white" />
              </div>
              <div className="flex flex-col">
                <h3
                  ref={nameRef}
                  className="text-xl font-bold text-neutral-900"
                >
                  {name}
                </h3>
                <p ref={roleRef} className="text-base text-slate-500">
                  {role}
                </p>
              </div>
            </header>
            <blockquote className="mt-6 text-2xl italic font-semibold leading-8 text-neutral-900 max-md:max-w-full">
              {testimonial}
            </blockquote>
          </div>
        </article>

        <div ref={imageRef} className="ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <Image
            src={imageSrc}
            alt="Testimonial illustration"
            className="object-contain w-full mt-1 rounded-2xl aspect-[1.43] shadow-[0px_8px_16px_rgba(0,0,0,0.08)] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  )
}
