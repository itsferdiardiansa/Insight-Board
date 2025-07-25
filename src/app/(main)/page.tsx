import { PricingPlan } from '@/features/plan/components/PricingPlan'
import { Testimonials } from '@/features/testimonials/components/Testimonials'
import { ClosingCallCTA } from '@/components/layout/sections/cta'

import HomeBanner from './_components/home-banner'
import ProductBenefits from './_components/product-benefits'
import PowerfullSolutions from './_components/powerfull-solutions'
import Collaboration from './_components/collaboration'
import AnalyticsDashboard from './_components/analytics-dashboard'
import Insight from './_components/insight'
import SocialProof from './_components/social-proof'
import Integration from './_components/integration'
import CoreBenefit from './_components/core-benefit'

export default function LandingPage() {
  return (
    <div className="home">
      <div className="layout-wrapper overflow-visible!">
        <HomeBanner />
      </div>

      <div className="bg-(--secondary)">
        <div className="layout-wrapper py-(--space-4xl)">
          <SocialProof />
        </div>
      </div>

      <div className="layout-wrapper section-stack">
        <ProductBenefits />
        <PowerfullSolutions />
        <Collaboration />
        <AnalyticsDashboard />
        <Insight />
      </div>

      <div className="bg-(--secondary)">
        <div className="layout-wrapper py-(--space-4xl)">
          <CoreBenefit />
        </div>
      </div>

      <div className="layout-wrapper section-stack">
        <Integration />
        <Testimonials />

        <PricingPlan
          title="Unlock your business potential"
          subtitle="Join thousands of companies scaling their business with our powerful solutions"
        />
        <ClosingCallCTA />
      </div>
    </div>
  )
}
