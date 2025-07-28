import { FaCheck } from 'react-icons/fa'
import { cn } from '@/utils/tailwind'

type PricingPlanFeatureProps = {
  text: string
  isRecommended: boolean
}

export const PricingPlanFeature: React.FC<PricingPlanFeatureProps> = ({
  text,
  isRecommended,
}) => {
  return (
    <div className="w-full flex gap-(--space-sm) items-center">
      <FaCheck
        className={cn(
          'p-1 rounded-full text-xl',
          isRecommended ? 'bg-neutral-100' : 'bg-neutral-700',
          isRecommended ? 'text-gray-900' : 'text-gray-100'
        )}
      />

      <p className="self-stretch my-auto">{text}</p>
    </div>
  )
}
