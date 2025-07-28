'use client'

import { createContext, useContext } from 'react'

type PricingContextType = {
  isAnnual: boolean
  togglePricing: () => void
}

export const PricingContext = createContext<PricingContextType | undefined>(
  undefined
)

export const usePricing = () => {
  const context = useContext(PricingContext)
  if (!context) {
    throw new Error('usePricing must be used within a BillingProvider')
  }
  return context
}
