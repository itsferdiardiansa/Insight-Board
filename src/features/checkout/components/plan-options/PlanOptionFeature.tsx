import { FaCheck } from 'react-icons/fa'

type PlanOptionFeatureProps = {
  text: string
  isRecommended: boolean
}

export const PlanOptionFeature: React.FC<PlanOptionFeatureProps> = ({
  text,
}) => {
  return (
    <div className="w-full flex gap-(--space-sm) items-center">
      <FaCheck className="text-sm text-(--primary)" />
      <p className="self-stretch my-auto">{text}</p>
    </div>
  )
}
