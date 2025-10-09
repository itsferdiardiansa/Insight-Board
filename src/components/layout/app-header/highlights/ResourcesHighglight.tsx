import { HighlightCard } from './HighlightCard'

export const ResourcesHighlight: React.FC = () => {
  return (
    <div className="flex flex-col gap-space-sm">
      <HighlightCard
        title="How Our Analytics Platform Helps Startups Find Product-Market Fit Faster"
        label="Read article"
        link="/article/how-our-analytics-platform-helps-startups-find-product-market-fit-faster"
        badgeText="Case Study"
        badgeVariant="light"
        badgeSize="sm"
        className="bg-gradient-to-br from-orange-400 to-orange-600"
        titleClassName="text-orange-200"
        linkClassName="text-orange-200"
        badgeClassName="bg-orange-300"
      />

      <HighlightCard
        title="Designing a Scalable Event Pipeline for Real-Time Product Analytics"
        label="Read article"
        link="/article/designing-a-scalable-event-pipeline-for-real-time-product-analytics"
        badgeText="Engineering"
        badgeVariant="light"
        badgeSize="sm"
        className="bg-gradient-to-b from-stone-800 to-stone-600"
        titleClassName="text-stone-300"
        linkClassName="text-stone-300"
        badgeClassName="bg-stone-600 text-stone-300"
      />
    </div>
  )
}
