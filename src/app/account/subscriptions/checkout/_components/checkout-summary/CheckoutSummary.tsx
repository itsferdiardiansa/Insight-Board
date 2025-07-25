'use client'

import { useCheckout } from '@/context/checkout/CheckoutContext'
import { OrderSummary } from '@/features/checkout/components/OrderSummary'
import { useEffect, useState } from 'react'

export const CheckoutSummary: React.FC = () => {
  const { step, plan, billingInfo } = useCheckout()
  const [allowNextStep, setAllowNextStep] = useState(false)

  useEffect(() => {
    if (step.current === 0) {
      setAllowNextStep(!!plan.selected)
    } else if (step.current === 1) {
      // const { fullname, cardNumber, expiry, cvv } = billingInfo
      // setAllowNextStep(!!fullname && !!cardNumber && !!expiry && !!cvv)
    } else {
      setAllowNextStep(true) // allow final step
    }
  }, [step, plan.selected, billingInfo])

  const handleComplete = () => {
    step.set(step.current + 1)
  }

  return (
    <div className="sticky h-[calc(100vh-78px)] top-0 shadow-lg bg-white shadow-stone-200 p-(--space-4xl)">
      <OrderSummary
        isCompleteDisabled={!allowNextStep}
        onComplete={handleComplete}
      />
    </div>
  )
}
