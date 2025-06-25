import Banner from './_components/banner'
import ProductBenefits from './_components/product-benefits'
import PowerfullSolutions from './_components/powerfull-solutions'
import Collaboration from './_components/collaboration'
import AnalyticsDashboard from './_components/analytics-dashboard'
import Insight from './_components/insight'
import Testimonials from './_components/testimonials'
import ProductPlans from './_components/product-plans'
import SocialProof from './_components/social-proof'
import ConversionBanner from './_components/conversion-banner'
import Integration from './_components/integration'

export default function LandingPage() {
  return (
    <div className="home">
      <Banner />

      <div className="relative bg-white">
        <div className="layout-wrapper section-stack">
          <SocialProof />
          <ProductBenefits />
          <PowerfullSolutions />
          <Collaboration />
          <AnalyticsDashboard />
          <Insight />
          <Integration />
          <Testimonials />
          <ProductPlans />
          <ConversionBanner />
        </div>
      </div>
    </div>
  )
}
