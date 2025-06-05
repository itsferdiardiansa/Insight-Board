'use client'

import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from 'react'

type BillingContextType = {
  isAnnual: boolean
  toggleBilling: () => void
}

const BillingContext = createContext<BillingContextType | undefined>(undefined)

export const useBilling = () => {
  const context = useContext(BillingContext)
  if (!context) {
    throw new Error('useBilling must be used within a BillingProvider')
  }
  return context
}

export const BillingProvider = ({ children }: PropsWithChildren) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const toggleBilling = () => setIsAnnual(prev => !prev)

  return (
    <BillingContext.Provider value={{ isAnnual, toggleBilling }}>
      {children}
    </BillingContext.Provider>
  )
}
