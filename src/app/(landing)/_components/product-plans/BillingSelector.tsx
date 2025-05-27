'use client'

import React, { useState } from 'react'
import { cn } from '@/utils/tailwind'

interface BillingSelectorProps {
  onToggle?: (isAnnual: boolean) => void
}

export const BillingSelector: React.FC<BillingSelectorProps> = ({
  onToggle,
}) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = () => {
    setIsAnnual(prev => {
      const updated = !prev
      onToggle?.(updated)
      return updated
    })
  }

  return (
    <div className="flex gap-3.5 items-center text-base">
      <p
        className={cn(
          'self-stretch my-auto',
          isAnnual ? 'text-neutral-500' : 'text-neutral-800 font-semibold'
        )}
      >
        Monthly
      </p>

      <button
        onClick={handleToggle}
        role="switch"
        aria-checked={isAnnual}
        className={cn(
          'relative w-12 h-6 rounded-full transition-colors duration-300',
          isAnnual ? 'bg-violet-600' : 'bg-gray-300'
        )}
      >
        <span
          className={cn(
            'absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white transition-transform duration-300 transform',
            isAnnual ? 'translate-x-6' : 'translate-x-0'
          )}
        />
      </button>

      <p
        className={cn(
          'self-stretch py-0.5 my-auto leading-6',
          isAnnual ? 'text-neutral-800 font-semibold' : 'text-neutral-500'
        )}
      >
        Bill Annually{' '}
        <span className="font-semibold italic text-violet-700">Save 15%</span>
      </p>
    </div>
  )
}
