'use client'
import * as React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

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
  return (
    <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <article className="w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <header className="flex gap-3 items-center self-start">
              <div className="h-[45px] w-[46px] flex flex-col justify-center items-center self-stretch px-3 my-auto bg-green-700 rounded-xl">
                <FaQuoteLeft className="text-white" />
              </div>
              <div className="flex flex-col self-stretch my-auto rounded-none">
                <h3 className="text-xl font-bold text-neutral-900">{name}</h3>
                <p className="self-start text-base text-slate-500">{role}</p>
              </div>
            </header>
            <blockquote className="mt-6 text-2xl italic font-semibold leading-8 text-neutral-900 max-md:max-w-full">
              {testimonial}
            </blockquote>
          </div>
        </article>
        <div className="ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <Image
            src={imageSrc}
            alt="Testimonial illustration"
            className="object-contain grow mt-1 w-full rounded-2xl aspect-[1.43] shadow-[0px_8px_16px_rgba(0,0,0,0.08)] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  )
}
