'use client'
import { PropsWithChildren, useState } from 'react'
import { BillingContext } from './BillingContext'

export const BillingProvider = ({ children }: PropsWithChildren) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const toggleBilling = () => setIsAnnual(prev => !prev)

  return (
    <BillingContext.Provider value={{ isAnnual, toggleBilling }}>
      {children}
    </BillingContext.Provider>
  )
}
