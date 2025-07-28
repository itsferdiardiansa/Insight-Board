'use client'
import { PropsWithChildren, useState } from 'react'
import { PricingContext } from './PricingContext'

export const PricingProvider = ({ children }: PropsWithChildren) => {
  const [isAnnual, setIsAnnual] = useState(false)

  const togglePricing = () => setIsAnnual(prev => !prev)

  return (
    <PricingContext.Provider value={{ isAnnual, togglePricing }}>
      {children}
    </PricingContext.Provider>
  )
}
