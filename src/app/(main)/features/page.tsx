import type { Metadata } from 'next'

import { ClosingCallCTA } from '@/components/layout/sections/cta'
import { FAQ } from '@/features/faq/components/FAQ'

import { Advantages } from './_components/advantages'
import { FeatureBanner } from './_components/feature-banner'
import { FeatureShowcase } from './_components/feature-showcase'
import { CeoStatement } from './_components/ceo-statement'
import { IntegratedFlow } from './_components/integrated-flow'
import { PlatformFeatures } from './_components/platform-features'

export const metadata: Metadata = {
  title: 'Feature',
}

export default function FeaturePage() {
  return (
    <div className="feature">
      <div className="bg-gradient-to-tr from-purple-400 via-purple-100 to-violet-200 overflow-hidden">
        <div className="layout-wrapper overflow-visible!">
          <FeatureBanner />
        </div>
      </div>

      <div className="layout-wrapper section-stack">
        <FeatureShowcase />
      </div>

      <div className="bg-gradient-to-br from-violet-300 via-violet-100 to-violet-100">
        <div className="layout-wrapper section-stack">
          <PlatformFeatures />
        </div>
      </div>

      <div className="bg-gradient-to-b from-violet-100 to-white">
        <div className="layout-wrapper section-stack">
          <Advantages />
        </div>
      </div>

      <div className="layout-wrapper section-stack">
        <IntegratedFlow />

        <CeoStatement />

        <FAQ
          title="Frequently asked questions"
          subtitle="We take pride in being your trusted our partner."
        />

        <ClosingCallCTA />
      </div>
    </div>
  )
}
