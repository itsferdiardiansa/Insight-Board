import { FaCheck } from 'react-icons/fa'

type PlanOptionFeatureProps = {
  text: string
  isRecommended: boolean
}

export const PlanOptionFeature: React.FC<PlanOptionFeatureProps> = ({
  text,
}) => {
  return (
    <div className="w-full flex gap-4 items-center">
      <div>
        <FaCheck className="text-sm text-(--primary)" />
      </div>
      <p className="self-stretch my-auto">{text}</p>
    </div>
  )
}
