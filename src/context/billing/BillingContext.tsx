'use client'

import { createContext, useContext } from 'react'

type BillingContextType = {
  isAnnual: boolean
  toggleBilling: () => void
}

export const BillingContext = createContext<BillingContextType | undefined>(
  undefined
)

export const useBilling = () => {
  const context = useContext(BillingContext)
  if (!context) {
    throw new Error('useBilling must be used within a BillingProvider')
  }
  return context
}
