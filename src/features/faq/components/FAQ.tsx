'use client'

import * as React from 'react'
import { useState } from 'react'
import faqData from '../data/faq-data'
import { FiChevronDown } from 'react-icons/fi'
import { cn } from '@/utils/tailwind'

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
      {faqData.map((faq, index) => (
        <div key={index} className="group">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
          >
            <span className="text-xl font-medium text-neutral-900">
              {faq.question}
            </span>
            <FiChevronDown
              className={cn(
                'text-xl transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 pb-5 text-neutral-600 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
