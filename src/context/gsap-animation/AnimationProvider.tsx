'use client'

import { PropsWithChildren, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let pluginRegistered = false

export const AnimationProvider = ({ children }: PropsWithChildren) => {
  useLayoutEffect(() => {
    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger)
      pluginRegistered = true
    }
  }, [])

  return <>{children}</>
}
