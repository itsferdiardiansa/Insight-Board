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
    <div className="pricing bg-grid">
      <JsonLd data={pricingSchema} />

      <div className="bg-gradient-to-b from-gray-50 via-gray-400 to-gray-200">
        <div className="layout-wrapper pt-[78px]">
          <PlanTierList />
        </div>

        <div className="relative bg-white z-10">
          <div className="absolute left-0 right-0 -top-48 h-80">
            <div className="w-full h-full bg-gradient-to-b from-white/80 to-white blur-md bg-white/30 backdrop-blur-lg" />
          </div>
          <div className="layout-wrapper section-stack">
            <PlanTierComparison />
            <PricingFAQ />
            <PricingCallout />
          </div>
        </div>
      </div>
    </div>
  )
}
