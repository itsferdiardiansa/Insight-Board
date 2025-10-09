'use client'

import { type ReactNode } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { cn } from '@/utils/tailwind'

import AmazonBrandLogo from '@/assets/logo/partners/amazon.svg'
import MicrosoftBrandLogo from '@/assets/logo/partners/microsoft.svg'

type Testimonial = {
  imageSrc: StaticImageData
  name: string
  role: string
  testimonial: string
  isFeatured: boolean
  logoKey?: ReactNode
  bgColor?: string
}

type IndustryLeadersProps = {
  testimonials: Array<Testimonial[]>
}

const logos: Record<string, ReactNode> = {
  microsoft: <MicrosoftBrandLogo className="text-inverse" />,
  amazon: <AmazonBrandLogo className="text-inverse" />,
}

const GridBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
)

export const IndustryLeaders: React.FC<IndustryLeadersProps> = ({
  testimonials,
}) => {
  return (
    <div className="w-full">
      <div className="flex max-md:justify-center mb-8">
        <h1 className="text-heading-2xl text-default">
          Trusted by Industry Leaders
        </h1>
      </div>

      <div className="flex max-md:flex-col gap-4">
        {testimonials.map((subTestimonial, i) => (
          <div key={i} className="flex flex-col gap-space-md">
            {subTestimonial.map((subTestimonial, j) => (
              <div
                key={j}
                className={cn(
                  'relative p-6 rounded-xl',
                  subTestimonial.bgColor
                    ? subTestimonial.bgColor
                    : 'bg-accent-gray-subtlest',
                  { 'h-full': subTestimonial.isFeatured }
                )}
              >
                <div className="h-full flex flex-col justify-between max-md:gap-8 z-50">
                  {subTestimonial.isFeatured && (
                    <div className="w-32">
                      {logos[subTestimonial.logoKey as string]}
                    </div>
                  )}

                  <div>
                    <div className="mb-space-md">
                      <p
                        className={cn(
                          'text-body-md md:text-body-lg',
                          subTestimonial.isFeatured
                            ? 'text-inverse'
                            : 'text-subtle'
                        )}
                      >
                        “{subTestimonial.testimonial}”
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        className="w-14 h-14 rounded-full object-cover"
                        src={subTestimonial.imageSrc}
                        alt={subTestimonial.name}
                        width={76}
                        height={76}
                      />
                      <div>
                        <p
                          className={cn('text-body-md md:text-body-lg font-bold', {
                            'text-inverse': subTestimonial.isFeatured,
                          })}
                        >
                          {subTestimonial.name}
                        </p>
                        <p
                          className={cn(
                            subTestimonial.isFeatured
                              ? 'text-inverse'
                              : 'text-subtle'
                          )}
                        >
                          {subTestimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {subTestimonial.isFeatured && (
                  <div>
                    <GridBackground />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/30 to-transparent pointer-events-none z-20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
