'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const phrases = ['Operations Today', 'Strategy Now', 'Performance Metrics']
const baseText = 'Transform Your Revenue '

export const BannerContent: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const [additionalText, setAdditionalText] = useState('')

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    phrases.forEach(phrase => {
      const fullText = phrase

      for (let i = 0; i <= fullText.length; i++) {
        timeline.call(
          () => setAdditionalText(fullText.slice(0, i)),
          undefined,
          '+=0.05'
        )
      }

      timeline.to({}, { duration: 1.5 })

      for (let i = fullText.length - 1; i >= 0; i--) {
        timeline.call(
          () => setAdditionalText(fullText.slice(0, i)),
          undefined,
          '+=0.035'
        )
      }

      timeline.to({}, { duration: 0.7 })
    })
  }, [])

  return (
    <div className="flex flex-col gap-(--space-sm) text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-neutral-800 inline-block">
        <span ref={textRef}>{baseText}</span>
        <br />
        <span>{additionalText}</span>
        <span ref={cursorRef} className="animate-blink text-neutral-800">
          |
        </span>
      </h1>

      <p className="text-lg lg:text-2xl text-neutral-500 max-md:max-w-full">
        An awesome & powerful tool for your business to streamline workflows
        <br className="hidden lg:flex" />
        and drive growth with real-time insights.
      </p>
    </div>
  )
}
