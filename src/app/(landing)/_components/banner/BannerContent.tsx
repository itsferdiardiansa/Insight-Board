'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const phrases = ['Operations Today', 'Strategy Now', 'Performance Metrics']
const baseText = 'Transform Your Revenue '

export const BannerContent: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const [currentText, setCurrentText] = useState(baseText)

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    phrases.forEach(phrase => {
      const fullText = baseText + phrase

      for (let i = baseText.length + 1; i <= fullText.length; i++) {
        timeline.call(
          () => setCurrentText(fullText.slice(0, i)),
          undefined,
          '+=0.05'
        )
      }

      timeline.to({}, { duration: 1.5 })

      for (let i = fullText.length - 1; i >= baseText.length; i--) {
        timeline.call(
          () => setCurrentText(fullText.slice(0, i)),
          undefined,
          '+=0.035'
        )
      }

      timeline.to({}, { duration: 0.7 })
    })
  }, [])

  return (
    <div>
      <h1 className="h-16 text-4xl lg:text-6xl font-extrabold text-neutral-800 inline-block">
        <span ref={textRef}>{currentText}</span>
        <span ref={cursorRef} className="animate-blink text-neutral-800">
          |
        </span>
      </h1>

      <p className="mt-3.5 ml-4 text-base lg:text-xl text-neutral-500 max-md:max-w-full">
        An awesome & powerful tool for your business to streamline workflows
        <br className="hidden lg:flex" />
        and drive growth with real-time insights.
      </p>
    </div>
  )
}
