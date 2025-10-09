'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const phrases = ['Operations Today', 'Strategy Now', 'Performance Metrics']
const baseText = 'Transform Your Revenue '

export const HomeBannerContent: React.FC = () => {
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
    <div className="flex flex-col gap-space-sm text-center">
      <h1 className="text-display font-black! inline-block">
        <span ref={textRef}>{baseText}</span>
        <br />
        <span>{additionalText}</span>
        <span ref={cursorRef} className="animate-blink">
          |
        </span>
      </h1>

      <p className=" max-md:max-w-full text-heading-xl text-subtle">
        An awesome & powerful tool for your business to streamline workflows
        <br className="hidden lg:flex" />
        and drive growth with real-time insights.
      </p>
    </div>
  )
}
