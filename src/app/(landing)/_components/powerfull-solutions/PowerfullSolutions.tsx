'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import { PowerfullSolutionsHeader } from './PowerfullSolutionsHeader'
import { Features } from './Features'

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

function PowerfullSolutions() {
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
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      )
    }
  }, [loadedIndex])

  return (
    <div className="content-block">
      <div className="flex flex-col flex-col-reverse md:flex-row gap-12 xl:gap-32">
        <div className="flex-1 flex flex-col justify-center items-stretch gap-8 xl:gap-16">
          <PowerfullSolutionsHeader />
          <Features
            currentIndex={currentIndex}
            setCurrentIndex={handleSetIndex}
          />
        </div>

        <div className="relative min-h-[410px] flex-1 rounded-4xl overflow-hidden p-12 bg-violet-200">
          <div
            ref={imageWrapperRef}
            key={loadedIndex}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              className="w-full h-full object-cover"
              src={images[loadedIndex]}
              width={500}
              height={600}
              alt="Dynamic Feature Image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PowerfullSolutions
