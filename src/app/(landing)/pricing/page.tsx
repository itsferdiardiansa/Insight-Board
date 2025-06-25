import type { Metadata } from 'next'
import PlanTierList from './_components/plan-tier-list'
import PricingCallout from './_components/pricing-callout'
import PricingFAQ from './_components/pricing-faq'
import { JsonLd } from '@/components/core/seo'
import { pricingSchema } from '@/schema/pricing'
import { PlanTierComparison } from './_components/plan-tier-list/PlanTierComparison'

export const metadata: Metadata = {
  title: 'Pricing',
}

export default function PricingPage() {
  return (
    <div className="pricing">
      <JsonLd data={pricingSchema} />

      <div className="layout-wrapper pt-[78px]">
        <PlanTierList />
      </div>

      <div className="bg-white">
        <div className="layout-wrapper section-stack">
          <PlanTierComparison />

          <PricingFAQ />

          <PricingCallout />
        </div>
      </div>
    </div>
  )
}
