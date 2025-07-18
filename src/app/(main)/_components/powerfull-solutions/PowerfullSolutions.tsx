'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import { MdTransform } from 'react-icons/md'

import { SectionHeader } from '@/components/layout/sections/SectionHeader'
import { SectionShell } from '@/components/layout/sections'
import { Features } from './Features'
import { cn } from '@/utils/tailwind'

import AnalyzerImage from '@/assets/images/dedicated.jpg'
import AgileMethodologyImage from '@/assets/images/agile-methodology.jpg'
import CatchUpOutsideImage from '@/assets/images/catch-up-outside.jpg'
import TeamSharingImageImage from '@/assets/images/team-sharing.jpg'

const images = [
  AnalyzerImage,
  AgileMethodologyImage,
  CatchUpOutsideImage,
  TeamSharingImageImage,
]

const PowerfullSolutions: React.FC = () => {
  const imageWrapperRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadedIndex, setLoadedIndex] = useState(0)

  const handleSetIndex = (index: number) => {
    if (index === currentIndex) return

    const img = new window.Image()
    img.src = images[index].src

    img.onload = () => {
      setLoadedIndex(index)
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    if (imageWrapperRef.current) {
      gsap.fromTo(
        imageWrapperRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }, [])

  return (
    <SectionShell direction={'col'} responsiveDirection={'mdRow'}>
      <div className="flex-1 flex flex-col justify-center items-stretch gap-8 xl:gap-16">
        <SectionHeader
          title="Transform your workflow with powerful solutions"
          subtitle="Self service data analytics software that makes you visually appealing data visualizations and insightful dashboards"
          textAlign={'center'}
          responsiveTextAlign={'mdLeft'}
          badgeLabel="Workflow"
          badgeVariant="secondary"
          badgeIcon={<MdTransform />}
        />
        <Features
          currentIndex={currentIndex}
          setCurrentIndex={handleSetIndex}
        />
      </div>

      <div
        ref={imageWrapperRef}
        className="relative flex-1 rounded-2xl overflow-hidden p-12 bg-violet-200 opacity-0 min-h-[410px]"
      >
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                'absolute inset-0 w-full h-full transition-opacity duration-1000',
                loadedIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <Image
                className="w-full h-full object-cover"
                src={image}
                fill
                alt={`Dynamic Feature Image - ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export default PowerfullSolutions
