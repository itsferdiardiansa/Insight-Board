'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { ProductBenefitCard } from './ProductBenefitCard'
import { ProductBenefitHeader } from './ProductBenefitHeader'
import productBenefits from './product-benefits-data'

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
    <div className="content-block">
      <div className="flex flex-col justify-center">
        <ProductBenefitHeader
          title="Explore our amazing features"
          subtitle="This template comes packed with modern features and clean layouts tailored for AI products, dev tools, and fast-growing SaaS platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8 justify-center mt-20 xl:mt-28 max-md:mt-10 max-md:max-w-full">
          {productBenefits.map((feature, index) => (
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

export default ProductBenefits
