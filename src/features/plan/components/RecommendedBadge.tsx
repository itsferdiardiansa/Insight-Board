import { Badge } from '@/components/ui/badge'

export const RecommendedBadge: React.FC = () => {
  return (
    <div className="absolute right-0 left-0 top-[-17px] mx-auto z-0 flex justify-center">
      <Badge variant={'secondary'}>Recommended</Badge>
    </div>
  )
}
