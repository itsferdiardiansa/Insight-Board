'use client'

import { CheckoutPayment } from './CheckoutPayment'
import { CheckoutPlanSelection } from './CheckoutPlanSelection'
import { useCheckout } from '@/context/checkout/CheckoutContext'

export type CheckoutFlowProps = {
  defaultPlanId?: string
  onPlanChange?: (id: string) => void
  defaultPaymentId?: string
  onPaymentChange?: (id: string) => void
  onCompletePayment?: () => void
}

export const CheckoutFlow: React.FC<CheckoutFlowProps> = ({
  onCompletePayment,
}) => {
  const { step } = useCheckout()

  return (
    <div className="max-h-[calc(100vh-78px)] overflow-y-auto md:col-span-2">
      <div className="2xl:w-2/3 max-2xl:p-(--space-4xl) py-(--space-4xl) mx-auto">
        <div className="flex-col gap-(--space-md)">
          <div className="mb-(--space-lg)">
            <h1 className="text-4xl font-black">
              {step.list[step.current]?.label ?? 'Checkout'}
            </h1>
          </div>

          <div className="relative">
            {step.current === 0 && <CheckoutPlanSelection />}
            {step.current === 1 && <CheckoutPayment />}
            {step.current === 2 && (
              <div className="p-(--space-lg)">
                <h2 className="text-2xl font-bold mb-(--space-md)">
                  Review & Complete
                </h2>
                <button
                  onClick={onCompletePayment}
                  className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 transition"
                >
                  Complete Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
