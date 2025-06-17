'use client'

import React, { useRef } from 'react'
import AnalyticsIllustration from '@/assets/analytics-dashboard-illustration.svg'
import { FaGoogle, FaFacebookF, FaSlack } from 'react-icons/fa'
import {
  SiGoogleanalytics,
  SiStripe,
  SiZapier,
  SiNotion,
  SiHubspot,
  SiIntercom,
} from 'react-icons/si'
import { useAuthAnimation } from '../hooks/useAuthAnimation'

type AuthAnimationProps = {
  heading: string
  subheading: string
}

export const AuthAnimation: React.FC<AuthAnimationProps> = ({
  heading,
  subheading,
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const illustrationRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<HTMLDivElement[]>([])
  iconRefs.current = []

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el)
    }
  }

  useAuthAnimation({ headingRef, subRef, illustrationRef, iconRefs })

  return (
    <div className="hidden relative lg:flex w-1/2 flex-col items-center justify-center text-white px-10 py-12 overflow-hidden bg-[linear-gradient(135deg,_#4f46e5_0%,_#7c3aed_100%)]">
      <div className="max-w-2xl text-white mb-12 flex flex-col items-center text-center">
        <h2 ref={headingRef} className="text-6xl font-bold mb-4 opacity-0">
          {heading}
        </h2>
        <p ref={subRef} className="max-w-md text-lg text-white/70 opacity-0">
          {subheading}
        </p>
      </div>

      <div className="relative w-full max-w-md my-16">
        <div ref={illustrationRef} className="opacity-0">
          <AnalyticsIllustration />
        </div>

        <div>
          <div
            ref={addToRefs}
            className="absolute top-[-40px] left-[30%] left-1/2 -translate-x-1/2 translate-y-[-15px] p-3 bg-white rounded-full opacity-0"
          >
            <FaGoogle className="w-6 h-6 text-[#4285F4]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute top-1/2 right-[-40px] -translate-y-1/2 translate-x-[12px] p-3 bg-white rounded-full opacity-0"
          >
            <FaFacebookF className="w-6 h-6 text-[#1877F2]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 translate-y-[15px] p-3 bg-white rounded-full opacity-0"
          >
            <FaSlack className="w-6 h-6 text-[#611f69]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute top-1/2 left-[-60px] -translate-y-1/2 -translate-x-[14px] p-3 bg-white rounded-full opacity-0"
          >
            <SiGoogleanalytics className="w-6 h-6 text-[#F9AB00]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute top-[-10px] right-[-20px] translate-x-[9px] translate-y-[-9px] p-3 bg-white rounded-full opacity-0"
          >
            <SiStripe className="w-6 h-6 text-[#635bff]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute bottom-[-10px] left-[-30px] p-3 bg-white rounded-full opacity-0"
          >
            <SiZapier className="w-6 h-6 text-[#FF4F00]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute top-[-1%] left-[-10%] p-3 bg-white rounded-full opacity-0"
          >
            <SiNotion className="w-6 h-6 text-black" />
          </div>

          <div
            ref={addToRefs}
            className="absolute bottom-[-10%] right-[-5%] p-3 bg-white rounded-full opacity-0"
          >
            <SiHubspot className="w-6 h-6 text-[#FF7A59]" />
          </div>

          <div
            ref={addToRefs}
            className="absolute top-[-20%] right-[20%] p-3 bg-white rounded-full opacity-0"
          >
            <SiIntercom className="w-6 h-6 text-[#1F8DED]" />
          </div>
        </div>
      </div>
    </div>
  )
}
