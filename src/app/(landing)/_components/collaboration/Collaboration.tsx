'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { CollaborationHeader } from './CollaborationHeader'
import { CollaborationFeatureItem } from './CollaborationFeatureItem'
import CollaborationImage from '@/assets/collaboration.jpg'
import { cn } from '@/utils/tailwind'

const features = [
  {
    title: 'Real-time Communication',
    description:
      'Chat, video calls, and instant messaging keep everyone in sync',
  },
  {
    title: 'Shared Documents',
    description: 'Edit and collaborate on documents simultaneously',
  },
  {
    title: 'Project Management',
    description: 'Track progress and manage tasks in one place',
  },
  {
    title: 'Secure Access',
    description: "Enterprise-grade security for your team's work",
  },
  {
    title: 'Integrated Calendar',
    description: 'Stay on top of deadlines with a shared team calendar',
  },
]

const CollaboratedWithYourTeam: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        featureRefs.current,
        { y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: featureRefs.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="content-block flex flex-col-reverse md:flex-row gap-12 xl:gap-32">
      <div
        ref={imageRef}
        className="relative min-h-[410px] lg:min-h-[610px] flex-1 rounded-2xl overflow-hidden opacity-0"
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={CollaborationImage}
          width={300}
          height={500}
          alt="Team collaboration illustration"
        />
      </div>

      <div
        ref={contentRef}
        className="flex-1 flex flex-col grow shrink gap-6 lg:gap-12 items-start justify-center self-stretch"
      >
        <CollaborationHeader
          title="Collaborate with your team anywhere, anytime"
          description="Break down geographical barriers and keep your team connected with powerful collaboration tools"
        />
        <div className="">
          {features.map((feature, index) => (
            <div key={feature.title} className={cn({ 'mt-5': index > 0 })}>
              <CollaborationFeatureItem
                title={feature.title}
                description={feature.description}
                ref={el => {
                  featureRefs.current[index] = el
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollaboratedWithYourTeam
