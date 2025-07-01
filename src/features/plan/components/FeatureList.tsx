import { FeatureItem } from './FeatureItem'

type FeatureListProps = {
  title?: React.ReactNode
  features: string[]
  isRecommended: boolean
}

export const FeatureList: React.FC<FeatureListProps> = ({
  title,
  features,
  isRecommended,
}) => {
  return (
    <section className="w-full">
      {title && <h3 className="mt-4 text-lg font-semibold">{title}</h3>}
      <div className="mt-4 space-y-4">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            text={feature}
            isRecommended={isRecommended}
          />
        ))}
      </div>
    </section>
  )
}
