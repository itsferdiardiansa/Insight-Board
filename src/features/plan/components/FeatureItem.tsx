import { FaCheck } from 'react-icons/fa'
import { cn } from '@/utils/tailwind'

type FeatureItemProps = {
  text: string
  isRecommended: boolean
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  text,
  isRecommended,
}) => {
  return (
    <div className="flex gap-4 items-center w-full">
      <div
        className={cn(
          'p-1 rounded-full',
          isRecommended ? 'bg-neutral-100' : 'bg-neutral-800'
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
