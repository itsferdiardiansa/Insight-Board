'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { FeatureCard } from './FeatureCard'
import { FaRocket, FaUsers, FaCogs, FaHandshake } from 'react-icons/fa'

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('[data-feature]')

    gsap.fromTo(
      cards,
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

  return (
    <div ref={sectionRef} className="flex flex-wrap flex-col lg:flex-row gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="opacity-0" data-feature>
          <FeatureCard
            icon={<FaRocket size={24} className="text-neutral-50" />}
            backgroundColor="bg-lime-500"
            title="Boost Efficiency"
            description="Streamline operations and reduce overhead"
          />
        </div>
        <div className="opacity-0" data-feature>
          <FeatureCard
            icon={<FaUsers size={24} className="text-neutral-50" />}
            backgroundColor="bg-amber-500"
            title="Team Collaboration"
            description="Work together seamlessly across teams"
          />
        </div>

        <div className="opacity-0" data-feature>
          <FeatureCard
            icon={<FaCogs size={24} className="text-neutral-50" />}
            backgroundColor="bg-pink-500"
            title="Advanced Tools"
            description="Automate and optimize complex workflows"
          />
        </div>
        <div className="opacity-0" data-feature>
          <FeatureCard
            icon={<FaHandshake size={24} className="text-neutral-50" />}
            backgroundColor="bg-teal-500"
            title="Client Success"
            description="Empower teams to serve clients better"
          />
        </div>
      </div>
    </div>
  )
}
