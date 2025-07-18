import type { Metadata } from 'next'
import PricingCallout from './_components/pricing-callout'
import { JsonLd } from '@/components/seo'
import { pricingSchema } from '@/schema/pricing'
import { PlanTierComparison } from './_components/plan-tier'
import { FAQ } from '@/features/faq/components/FAQ'
import { Plan } from '@/features/plan/components/Plan'

export const metadata: Metadata = {
  title: 'Pricing',
}

export default function PricingPage() {
  return (
    <div className="pricing">
      <JsonLd data={pricingSchema} />

      <div className="bg-gradient-to-b from-violet-100 via-pink-50 to-white">
        <div className="layout-wrapper section-stack">
          <Plan
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
  )
}
