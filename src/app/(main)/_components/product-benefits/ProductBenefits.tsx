'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { GoArrowRight } from 'react-icons/go'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { MdAutoAwesome, MdDashboardCustomize } from 'react-icons/md'
import { GiArtificialHive, GiCardboardBoxClosed } from 'react-icons/gi'
import { LiaShareAltSolid } from 'react-icons/lia'

import { ProductBenefitCard } from './ProductBenefitCard'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import productBenefits from './product-benefits-data'

/* eslint-disable react/jsx-key */
const icons = [
  <LiaShareAltSolid />,
  <MdAutoAwesome />,
  <MdDashboardCustomize />,
  <AiOutlineFileProtect />,
  <GiArtificialHive />,
]

const ctaLinks = [
  {
    title: 'Enterprise features',
    link: '/enterprise-features',
  },
  {
    title: 'Security and complience',
    link: '/security-compliance',
  },
  {
    title: 'Get a demo',
    link: '/demo',
  },
]

const ProductBenefits: React.FC = () => {
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
    <SectionShell direction="col">
      <SectionHeader
        title="Explore our amazing features"
        subtitle="This template comes packed with modern features and clean layouts tailored for AI products."
        textAlign="center"
        badgeLabel="Features"
        badgeVariant="secondary"
        badgeIcon={<GiCardboardBoxClosed />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center">
        {productBenefits.map((feature, index) => (
          <ProductBenefitCard
            key={index}
            ref={el => {
              itemRefs.current[index] = el
            }}
            icon={icons[index]}
            number={index + 1}
            {...feature}
          />
        ))}

        <div
          className="flex flex-col justify-center opacity-0"
          ref={el => {
            itemRefs.current[itemRefs.current.length] = el
          }}
        >
          {ctaLinks.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-(--space-md)"
            >
              <Link
                href={item.link}
                className="flex gap-(--space-sm) text-xl lg:text-3xl font-semibold hover:gap-(--space-md) transition-all duration-300 ease-in"
              >
                {item.title}
                <GoArrowRight className="mt-(--space-xs)" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export default ProductBenefits
