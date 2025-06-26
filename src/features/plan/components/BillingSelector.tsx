'use client'

import React from 'react'
import { useBilling } from '@/context/billing/BillingContext'
import { cn } from '@/utils/tailwind'

type BillingSelectorProps = {
  onToggle?: (isAnnual: boolean) => void
}

export const BillingSelector: React.FC<BillingSelectorProps> = () => {
  const { isAnnual, toggleBilling } = useBilling()

  return (
    <div className="w-[369px] flex gap-3.5 items-center md:text-lg bg-white rounded-full px-6 py-3 shadow-md shadow-gray-100">
      <p
        className={cn(
          'self-stretch my-auto',
          isAnnual ? 'text-neutral-500' : 'text-neutral-800 font-semibold'
        )}
      >
        Monthly
      </p>

      <button
        onClick={toggleBilling}
        role="switch"
        aria-checked={isAnnual}
        className={cn(
          'relative w-14 h-8 rounded-full transition-colors duration-300 cursor-pointer',
          isAnnual ? 'bg-gray-800' : 'bg-gray-300'
        )}
      >
        <span
          className={cn(
            'absolute top-[4px] left-[4px] h-6 w-6 rounded-full bg-white transition-transform duration-300 transform',
            isAnnual ? 'translate-x-6' : 'translate-x-0'
          )}
        />
      </button>

      <p
        className={cn(
          'self-stretch py-0.5 my-auto leading-6',
          isAnnual ? 'text-neutral-600 font-semibold' : 'text-neutral-500'
        )}
      >
        Billed Annually{' '}
        <span className="font-semibold italic text-violet-800">Save 15%</span>
      </p>
    </div>
  )
}
