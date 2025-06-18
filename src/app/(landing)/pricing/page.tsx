import type { Metadata } from 'next'
import PlanTierList from './_components/plan-tier-list'
import PricingCallout from './_components/pricing-callout'
import PricingFAQ from './_components/pricing-faq'
import { JsonLd } from '@/components/core/seo'
import { pricingSchema } from '@/schema/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />

      <div className="relative">
        <div className="layout-wrapper">
          <PlanTierList />
        </div>

        <div className="bg-white">
          <div className="layout-wrapper">
            <PricingFAQ />

            <PricingCallout />
          </div>
        </div>
      </div>
    </>
  )
}
