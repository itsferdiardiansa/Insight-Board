import { PlanOptionFeature } from './PlanOptionFeature'

type PlanOptionFeaturesProps = {
  title?: string
  features: string[]
  isRecommended: boolean
}

export const PlanOptionFeatures: React.FC<PlanOptionFeaturesProps> = ({
  title,
  features,
  isRecommended,
}) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="mt-4 font-semibold">
          <span className="font-bold">Everything in {title}, plus:</span>
        </h3>
      )}
      <div className="mt-4 space-y-4">
        {features.map((feature, index) => (
          <PlanOptionFeature
            key={index}
            text={feature}
            isRecommended={isRecommended}
          />
        ))}
      </div>
    </div>
  )
}
