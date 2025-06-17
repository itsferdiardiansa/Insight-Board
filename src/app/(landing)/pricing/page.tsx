import PlanTierList from './_components/plan-tier-list'
import PricingCallout from './_components/pricing-callout'
import PricingFAQ from './_components/pricing-faq'

export default function PricingPage() {
  return (
    <div className="relative">
      <div className="layout-wrapper">
        <PlanTierList />
      </div>

      <div className="bg-white">
        <div className="layout-wrapper">
          {/* <div className="content-block"> */}
          <PricingFAQ />

          <PricingCallout />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
