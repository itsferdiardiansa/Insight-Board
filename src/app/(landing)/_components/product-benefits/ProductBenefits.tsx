'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { ProductBenefitCard } from './ProductBenefitCard'
import { ProductBenefitHeader } from './ProductBenefitHeader'

import {
  MdQueryStats,
  MdSettingsSuggest,
  MdIntegrationInstructions,
  MdSecurity,
} from 'react-icons/md'

const features = [
  {
    icon: <MdQueryStats size={28} className="text-white" />,
    iconBgColor: 'bg-lime-500',
    title: 'Real-time Analytics',
    description:
      'Monitor your business performance with instant insights and detailed reporting dashboards.',
  },
  {
    icon: <MdSettingsSuggest size={28} className="text-white" />,
    iconBgColor: 'bg-amber-500',
    title: 'Smart Automation',
    description:
      'Automate repetitive tasks and workflows to save time and reduce manual errors.',
  },
  {
    icon: <MdIntegrationInstructions size={28} className="text-white" />,
    iconBgColor: 'bg-sky-500',
    title: 'Custom Integration',
    description:
      'Connect seamlessly with your existing tools and create a unified workflow.',
  },
  {
    icon: <MdSecurity size={28} className="text-white" />,
    iconBgColor: 'bg-rose-600',
    title: 'Advanced Security',
    description:
      'Enterprise-grade security features to protect your sensitive business data.',
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
          subtitle="Discover tools designed to streamline your workflow and boost productivity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-stretch self-center mt-20 xl:mt-28 max-md:mt-10 max-md:max-w-full">
          {features.map((feature, index) => (
            <ProductBenefitCard
              key={index}
              ref={el => {
                itemRefs.current[index] = el
              }}
              icon={feature.icon}
              iconBgColor={feature.iconBgColor}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
