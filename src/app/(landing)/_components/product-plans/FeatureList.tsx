import * as React from 'react'
import { FeatureItem } from './FeatureItem'

interface FeatureListProps {
  title: string
  features: string[]
}

export const FeatureList: React.FC<FeatureListProps> = ({
  title,
  features,
}) => {
  return (
    <section className="w-full">
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <div className="mt-4 space-y-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    </section>
  )
}
