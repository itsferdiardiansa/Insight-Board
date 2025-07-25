'use client'

import { BillingInfo } from '@/features/checkout/components/billing'
import { PaymentDetails } from '@/features/checkout/components/payments'

export const CheckoutPayment: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-(--space-4xl)">
      <div className="flex flex-col gap-(--space-md)">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Payment Details</h2>
        </div>

        <PaymentDetails />
      </div>

      <div className="flex flex-col gap-(--space-md)">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Billing Info</h2>
        </div>

        <BillingInfo />
      </div>
    </div>
  )
}
