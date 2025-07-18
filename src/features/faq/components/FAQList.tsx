'use client'

import { useState, useRef, useEffect, useId } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { gsap } from 'gsap'
import faqData from '../data/faq-data'
import { cn } from '@/utils/tailwind'

export const FAQList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (!el) return

      if (openIndex === idx) {
        el.style.maxHeight = el.scrollHeight + 'px'
        el.style.opacity = '1'
      } else {
        el.style.maxHeight = '0px'
        el.style.opacity = '0'
      }
    })
  }, [openIndex])

  // Animate FAQ items from bottom to top one by one on scroll
  useEffect(() => {
    if (!itemRefs.current.length) return

    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: itemRefs.current[0],
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-xl">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index
        const questionId = `${baseId}-faq-question-${index}`
        const answerId = `${baseId}-faq-answer-${index}`

        return (
          <div
            key={index}
            ref={el => {
              itemRefs.current[index] = el
            }}
            className="border border-gray-200 first:rounded-t-2xl last:rounded-b-2xl not-last:border-b-0 cursor-pointer opacity-0"
          >
            <div
              id={questionId}
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span className="text-xl font-bold text-(--secondary)">
                {faq.question}
              </span>
              <span className="text-2xl text-(--secondary) font-black">
                {isOpen ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            <div
              id={answerId}
              ref={el => {
                contentRefs.current[index] = el
              }}
              role="region"
              aria-labelledby={questionId}
              className={cn(
                'px-6 text-neutral-600 text-lg overflow-hidden transition-all duration-500 ease-in-out'
              )}
              style={{
                maxHeight: '0px',
                opacity: 0,
              }}
            >
              <div className="py-4">{faq.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
