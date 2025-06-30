'use client'
import { SectionHeader, SectionShell } from '@/components/layout/section'
import { InsightStats } from './InsightStats'
import { InsightImage } from './InsightImage'

const Insight: React.FC = () => {
  return (
    <SectionShell direction={'col'} responsiveDirection={'mdRow'}>
      <div className="min-h-[410px] lg:min-h-[610px] flex-1 flex self-stretch bg-gradient-to-b from-violet-700 via-violet-100 to-white rounded-4xl overflow-hidden">
        <InsightImage />
      </div>

      <div className="flex-1 self-stretch my-auto">
        <SectionHeader
          title="Transform raw data into actionable strategies"
          subtitle=" Our advanced analytics platform helps you understand your business metrics at a glance with intuitive visualizations."
          badgeLabel="Data Insights"
          badgeVariant={'ghost'}
          textAlign={'center'}
          responsiveTextAlign={'mdLeft'}
        />

        <InsightStats />
      </div>
    </SectionShell>
  )
}

export default Insight
