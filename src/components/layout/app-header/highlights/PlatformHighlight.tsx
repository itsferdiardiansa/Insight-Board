import { HighlightCard } from './HighlightCard'

export const PlatformHighlight: React.FC = () => {
  return (
    <HighlightCard
      title="Learn how partners use our product"
      label="Explore features"
      link="/features"
      badgeText="New"
      badgeVariant="light"
      badgeSize="sm"
      badgeClassName="bg-violet-300/20 text-violet-500"
      className="bg-gradient-to-b from-violet-50 via-pink-100 to-violet-100"
    />
  )
}
