import type { Metadata } from 'next'
import { CheckoutFlow } from './_components/checkout-flow'
import { CheckoutSummary } from './_components/checkout-summary'

export const metadata: Metadata = {
  title: 'Checkout',
}

export default function PricingCheckoutPage() {
  return (
    <div className="flex flex-col gap-(--space-4xl)">
      <div className="bg-stone-50">
        <div className="relative grid grid-cols-1 md:grid-cols-3">
          <CheckoutFlow />

          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
}
