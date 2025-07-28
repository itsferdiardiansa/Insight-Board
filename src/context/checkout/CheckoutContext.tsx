import { createContext, useContext } from 'react'
import { CurrencyValues } from '@/constants/currency'
import type { SubscriptionPlan } from '@/constants/subscription-plans'
import type { BillingInfo, BillingCycle } from '@/types/billing-info' // Ensure this exists

export type CheckoutContextType = {
  step: {
    current: number
    set: (step: number) => void
    list: Array<Record<string, string>>
  }

  plan: {
    id: number
    setId: (planId: number) => void
    billingCycle: BillingCycle
    setBillingCycle: (value: BillingCycle) => void
    currency: CurrencyValues
    setCurrency: (currency: CurrencyValues) => void
    isAnnual: boolean
    selected: SubscriptionPlan | undefined
    unitPrice: number
    subtotal: number
    annualSavings: number
    discountAmount: number
    taxAmount: number
    total: number
  }

  payment: {
    method: string
    setMethod: (method: string) => void
  }

  billingInfo: {
    data: BillingInfo
    setData: (info: BillingInfo) => void
  }
}

export const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
)

export const useCheckout = () => {
  const context = useContext(CheckoutContext)

  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider')
  }
  return context
}
