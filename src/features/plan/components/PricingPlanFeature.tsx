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
    <div className="w-full flex gap-4 items-center">
      <div
        className={cn(
          'p-1 rounded-full',
          isRecommended ? 'bg-neutral-100' : 'bg-neutral-700'
        )}
      >
        <FaCheck
          className={cn(
            'text-sm',
            isRecommended ? 'text-gray-900' : 'text-gray-100'
          )}
        />
      </div>
      <p className="self-stretch my-auto">{text}</p>
    </div>
  )
}
