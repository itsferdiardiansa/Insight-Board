'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ErrorDisplayContent } from './ErrorDisplayContent'
import { FabricLayer } from '@/components/ui/fabric-layer'
import { cn } from '@/utils/tailwind'

export type ErrorDisplayType = {
  isRounded?: boolean
  pageType: 'not-found' | 'error'
  title: string
  subTitle: string
}

export const ErrorDisplay: React.FC<ErrorDisplayType> = ({
  isRounded = true,
  ...restProps
}) => {
  const fabricRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fabricRef.current) return

    gsap.to(fabricRef.current, {
      x: 30,
      y: 20,
      duration: 5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }, [])

  return (
    <div
      className={cn(
        'w-full h-full relative content-card bg-violet-700 flex justify-center items-center',
        !isRounded && 'rounded-none!'
      )}
    >
      <FabricLayer />
      <ErrorDisplayContent {...restProps} />
    </div>
  )
}
