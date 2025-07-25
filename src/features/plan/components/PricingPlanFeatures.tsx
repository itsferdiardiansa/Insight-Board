import { PricingPlanFeature } from './PricingPlanFeature'

type PricingPlanFeaturesProps = {
  title?: React.ReactNode
  features: string[]
  isRecommended: boolean
}

export const PricingPlanFeatures: React.FC<PricingPlanFeaturesProps> = ({
  title,
  features,
  isRecommended,
}) => {
  return (
    <section className="w-full">
      {title && (
        <h3 className="mt-4 font-semibold">
          <span className="font-bold">Everything in {title}, plus:</span>
        </h3>
      )}
      <div className="mt-4 space-y-4">
        {features.map((feature, index) => (
          <PricingPlanFeature
            key={index}
            text={feature}
            isRecommended={isRecommended}
          />
        ))}
      </div>
    </section>
  )
}
