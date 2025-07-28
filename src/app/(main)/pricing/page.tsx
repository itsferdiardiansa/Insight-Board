import type { Metadata } from 'next'
import PricingCallout from './_components/pricing-callout'
import { JsonLd } from '@/components/seo'
import { pricingSchema } from '@/schema/pricing'
import { PlanTierComparison } from './_components/plan-tier'
import { FAQ } from '@/features/faq/components/FAQ'
import { PricingPlan } from '@/features/plan/components/PricingPlan'
import { PricingProvider } from '@/context/pricing/BillingProvider'

export const metadata: Metadata = {
  title: 'Pricing',
}

export default function PricingPage() {
  return (
    <PricingProvider>
      <div className="pricing">
        <JsonLd data={pricingSchema} />

        <div className="bg-gradient-to-b from-violet-100 via-violet-50 to-white">
          <div className="layout-wrapper section-stack">
            <PricingPlan
              title="The right plan for your team"
              subtitle="Get started with our flexible pricing options designed <br class='max-md:hidden' /> to meet your business needs"
            />
          </div>
        </div>

        <div className="layout-wrapper section-stack">
          <PlanTierComparison />
          <FAQ
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about InsightBoard and getting started."
          />
          <PricingCallout />
        </div>
      </div>
    </PricingProvider>
  )
}
