'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { ProductBenefitCard } from './ProductBenefitCard'
import { ProductBenefitHeader } from './ProductBenefitHeader'

import RealtimeGraphIllustration from '@/assets/illustrations/realtime-graph.png'
import IntegrationIllustration from '@/assets/illustrations/connect.png'
import AutomateIllustration from '@/assets/illustrations/get-data.png'
import SecurityIllustration from '@/assets/illustrations/security.png'
import TraficIllustration from '@/assets/illustrations/monthly-traffic.png'

const features = [
  {
    title: 'Real-time Analytics',
    description:
      'Track and visualize performance as it happens with interactive dashboards and intelligent insights tailored to your business.',
    span: 2,
    imageSrc: RealtimeGraphIllustration,
  },
  {
    title: 'Smart Automation',
    description:
      'Eliminate manual work with rule-based automation that streamlines processes and boosts operational efficiency.',
    span: 1,
    imageSrc: AutomateIllustration,
  },
  {
    title: 'Custom Integrations',
    description:
      'Seamlessly connect your favorite apps and services to create an integrated workflow across your entire stack.',
    span: 1,
    imageSrc: IntegrationIllustration,
  },
  {
    title: 'Advanced Security',
    description:
      'Safeguard your data with SSO, encryption, and compliance controls designed for modern SaaS environments.',
    span: 1,
    imageSrc: SecurityIllustration,
  },
  {
    title: 'Traffic Intelligence',
    description:
      'Get a complete view of your traffic sources and user behavior to optimize conversion and engagement.',
    span: 1,
    imageSrc: TraficIllustration,
  },
]

const Features: React.FC = () => {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: itemRefs.current[0],
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <div className="content-block">
      <div className="flex flex-col justify-center">
        <ProductBenefitHeader
          title="Explore our amazing features"
          subtitle="This template comes packed with modern features and clean layouts tailored for AI products, dev tools, and fast-growing SaaS platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 justify-center mt-20 xl:mt-28 max-md:mt-10 max-md:max-w-full">
          {features.map((feature, index) => (
            <ProductBenefitCard
              key={index}
              ref={el => {
                itemRefs.current[index] = el
              }}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
