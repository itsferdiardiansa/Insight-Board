'use client'

import { PlanSelection } from '@/features/checkout/components/PlanSelection'
import Link from 'next/link'
import { AiFillProduct } from 'react-icons/ai'

export type CheckoutPlanSelectionProps = {
  defaultPlanId?: string
  onPlanChange?: (id: string) => void
  defaultPaymentId?: string
  onPaymentChange?: (id: string) => void
  onCompletePayment?: () => void
}

export const CheckoutPlanSelection: React.FC<
  CheckoutPlanSelectionProps
> = () => {
  return (
    <div className="flex flex-col gap-(--space-md)">
      <div className="flex flex-col gap-(--space-sm)">
        <div className="align-self inline-flex items-center gap-(--space-sm)">
          <div className="bg-(--primary) p-(--space-xs) rounded-md">
            <AiFillProduct className="text-white text-xl" />
          </div>
          <span className="text-xl font-black text-gray-800">Plans</span>
        </div>

        <div className="flex justify-between">
          <div>
            <p>Your journey starts here — select the plan you need.</p>
          </div>

          <div>
            <Link
              href="/account/subscriptions/pricing"
              className="text-(--primary)"
            >
              See all features
            </Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <PlanSelection />
      </div>
    </div>
  )
}
