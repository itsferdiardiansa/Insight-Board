'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FeatureCard } from './FeatureCard'

const features = [
  {
    title: 'Boost Efficiency',
    description:
      'Streamline operations and reduce overhead. Reduce manual work for your team with measurable efficiency.',
  },
  {
    title: 'Team Collaboration',
    description:
      'Work together seamlessly across teams. Empower departments to share data, align on KPIs, and make faster decisions.',
  },
  {
    title: 'Advanced Tools',
    description:
      'Automate and optimize complex workflows. Use powerful tools designed to accelerate your most critical business operations.',
  },
  {
    title: 'Client Success',
    description:
      'Empower teams to serve clients better. Deliver insights, monitor performance, and improve engagement through data.',
  },
]

type FeaturesProps = {
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

export const Features = ({ currentIndex, setCurrentIndex }: FeaturesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const descRefs = useRef<(HTMLDivElement | null)[]>([])
  const prevIndex = useRef(currentIndex)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current.querySelectorAll('[data-feature]'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    )
  }, [])

  useEffect(() => {
    const prev = descRefs.current[prevIndex.current]
    const current = descRefs.current[currentIndex]

    if (prev && prev !== current) {
      gsap.to(prev, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(prev, { display: 'none' })
        },
      })
    }

    if (current) {
      const fromY = currentIndex > prevIndex.current ? -20 : 20
      gsap.set(current, { display: 'block' })
      gsap.fromTo(
        current,
        { y: fromY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      )
    }

    prevIndex.current = currentIndex
  }, [currentIndex])

  return (
    <div ref={sectionRef} className="flex flex-col">
      {features.map((feature, index) => (
        <div
          key={index}
          data-feature
          onClick={() => setCurrentIndex(index)}
          className="cursor-pointer opacity-0"
        >
          <FeatureCard
            number={index + 1}
            title={feature.title}
            description={feature.description}
            isCollapsed={currentIndex === index}
            contentRef={el => (descRefs.current[index] = el)}
          />
        </div>
      ))}
    </div>
  )
}
