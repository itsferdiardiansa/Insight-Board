'use client'

import { PropsWithChildren, useMemo, useState } from 'react'
import { CheckoutContext, CheckoutContextType } from './CheckoutContext'
import { type CurrencyValues, currencyRates } from '@/constants/currency'
import subscriptionPlans from '@/constants/subscription-plans'
import { BILLING_DISCOUNTS, BILLING_TAX } from '@/constants/billing'
import type { BillingInfo, BillingCycle } from '@/types/billing-info'

export const CheckoutProvider = ({ children }: PropsWithChildren) => {
  const [currentStep, setCurrentStep] = useState(0)

  const [planId, setPlanId] = useState<number>(0)
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [currency, setCurrency] = useState<CurrencyValues>('usd')

  const stepList = useMemo(
    () => [
      { label: 'Select your plan' },
      { label: 'Set Payment' },
      { label: 'Checkout' },
    ],
    []
  )

  const selectedPlan = subscriptionPlans.find(item => item.id === planId)

  const isAnnual = billingCycle === 'annual'

  const baseUnitPrice = useMemo(
    () => (selectedPlan ? selectedPlan.price : 0),
    [selectedPlan]
  )

  const unitPrice = baseUnitPrice * (currencyRates[currency] ?? 1)
  const subtotal = unitPrice * (isAnnual ? 12 : 1)
  const discountRate = isAnnual ? BILLING_DISCOUNTS['annual'] : 0
  const discountAmount = subtotal * discountRate
  const taxAmount = subtotal * BILLING_TAX
  const total = subtotal - discountAmount + taxAmount
  const monthlyYearCost = unitPrice * 12
  const annualSavings = isAnnual ? Math.max(0, monthlyYearCost - total) : 0

  const [paymentMethod, setPaymentMethod] = useState('card')

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    companyName: '',
    taxId: '',
    registrationNumber: '',
    email: '',
    phone: '',
    address: '',
    country: '',
  })

  const ctxValue: CheckoutContextType = {
    step: {
      current: currentStep,
      set: setCurrentStep,
      list: stepList,
    },
    plan: {
      id: planId,
      setId: setPlanId,
      billingCycle,
      setBillingCycle,
      currency,
      setCurrency,
      selected: selectedPlan,
      isAnnual,
      unitPrice,
      subtotal,
      discountAmount,
      taxAmount,
      total,
      annualSavings,
    },
    payment: {
      method: paymentMethod,
      setMethod: setPaymentMethod,
    },
    billingInfo: {
      data: billingInfo,
      setData: setBillingInfo,
    },
  }

  return (
    <CheckoutContext.Provider value={ctxValue}>
      {children}
    </CheckoutContext.Provider>
  )
}
