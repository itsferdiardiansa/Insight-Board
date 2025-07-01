'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { SectionShell } from '@/components/layout/section'
import { CollaborationHeader } from './CollaborationHeader'
import { CollaborationFeatureItem } from './CollaborationFeatureItem'
import { cn } from '@/utils/tailwind'

import CollaborationImage from '@/assets/images/collaboration.jpg'

const features = [
  { title: 'Real-time CommunicationTeams' },
  { title: 'Centralized Access Documents' },
  { title: 'Project Management Tools' },
]

const CollaboratedWithYourTeam: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
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
    <SectionShell
      className="bg-violet-700 rounded-4xl"
      direction={'col'}
      responsiveDirection={'mdRow'}
      innerClassName="p-(--space-md) xl:p-(--space-xl)"
    >
      <div className="relative flex-1 rounded-4xl overflow-hidden ">
        <div
          ref={imageRef}
          className="min-h-[410px] lg:min-h-[610px] opacity-0 z-10"
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={CollaborationImage}
            width={300}
            height={500}
            alt="Team collaboration illustration"
          />
        </div>

        <div className="absolute bottom-[3%] left-[3%] xl:bottom-[5%] xl:left-[5%] z-50">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn({ 'mt-2 xl:mt-4': index > 0 })}
            >
              <CollaborationFeatureItem
                title={feature.title}
                ref={el => {
                  featureRefs.current[index] = el
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={contentRef}
        className="flex-1 flex flex-col grow shrink items-start justify-center self-stretch"
      >
        <CollaborationHeader
          title="Collaborate with your team anywhere, anytime"
          subTitle="Break down geographical barriers and keep your team connected with powerful collaboration tools"
          description="By truly understanding our customers challenges, we're able to deliver forward-thinking products that solve real problems and deliver more than promised."
        />
      </div>
    </SectionShell>
  )
}

export default CollaboratedWithYourTeam
