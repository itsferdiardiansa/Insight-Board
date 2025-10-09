'use client'

import { Button } from '@/components/ui/button'
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
    <div className="overflow-y-auto md:col-span-2">
      <div className="2xl:w-2/3 max-2xl:p-space-4xl py-space-4xl mx-auto">
        <div className="flex-col gap-space-md">
          <div className="mb-space-lg">
            <h1 className="text-heading-2xl font-black!">
              {step.list[step.current]?.label ?? 'Checkout'}
            </h1>
          </div>

          <div className="relative">
            {step.current === 0 && <CheckoutPlanSelection />}
            {step.current === 1 && <CheckoutPayment />}
            {step.current === 2 && (
              <div className="p-space-lg">
                <h2 className="text-heading-2xl font-bold mb-space-md">
                  Review & Complete
                </h2>
                <Button variant="secondary" onClick={onCompletePayment}>
                  Complete Checkout
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
