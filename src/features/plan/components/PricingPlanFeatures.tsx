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
    <div className="w-full text-body-md md:text-body-lg font-medium">
      {title && (
        <h3 className="mt-4 font-semibold">
          <span className="font-bold">Everything in {title}, plus:</span>
        </h3>
      )}
      <div className="mt-4 space-y-gap-sm font-thin!">
        {features.map((feature, index) => (
          <PricingPlanFeature
            key={index}
            text={feature}
            isRecommended={isRecommended}
          />
        ))}
      </div>
    </div>
  )
}
