import { FeatureGrid } from '@/components/layout/sections/feature'
import { BsClipboard2Data } from 'react-icons/bs'
import { LiaBusinessTimeSolid } from 'react-icons/lia'
import { MdUpdate } from 'react-icons/md'
import { TbFilterSearch } from 'react-icons/tb'

import CrystalInsightsIllustrtation from '@/assets/illustrations/crystal-insights.png'
import SmartReportsIllustrtation from '@/assets/illustrations/smart-reports.png'
import AutomateWorkflowsIllustrtation from '@/assets/illustrations/automate-workflows.png'
import AdvancedFiltersIllustrtation from '@/assets/illustrations/advanced-filters.png'

export const PlatformFeatures: React.FC = () => {
  return (
    <>
      <FeatureGrid
        title="Drive decisions with crystal-clear insights"
        subtitle="Unlock the story behind your data using detailed reports tailored to your business needs."
        badgeLabel="Clear Insights"
        badgeVariant="ghost"
        badgeClassName="pl-0! text-(--primary)!"
        badgeIcon={<LiaBusinessTimeSolid />}
        imageSrc={CrystalInsightsIllustrtation}
        imageMeta="CrystalInsight"
        ctaHref="/contact"
        ctaText="Get Started"
        direction={'col'}
        responsiveDirection={'mdRow'}
      />

      <FeatureGrid
        title="Smart reports that power every decision"
        subtitle="Convert complex data into simple, meaningful reports that help you move faster and make informed choices."
        badgeLabel="Smart Report"
        badgeVariant="ghost"
        badgeClassName="pl-0! text-(--primary)!"
        badgeIcon={<BsClipboard2Data />}
        imageSrc={SmartReportsIllustrtation}
        imageMeta="InisghtBoard - Smart Reports"
        ctaHref="/contact"
        ctaText="Get Started"
        direction={'col'}
        responsiveDirection={'mdRowReverse'}
      />

      <FeatureGrid
        title="Automate your data workflows"
        subtitle="Set rules to send reports or alerts to Slack, Notion, or email when your data hits key milestones—no manual steps needed."
        badgeLabel="Automation"
        badgeVariant="ghost"
        badgeClassName="pl-0! text-(--primary)!"
        badgeIcon={<MdUpdate />}
        imageSrc={AutomateWorkflowsIllustrtation}
        imageMeta="InisghtBoard - Automate Workflows"
        ctaHref="/contact"
        ctaText="Get Started"
        direction={'col'}
        responsiveDirection={'mdRow'}
      />

      <FeatureGrid
        title="Segment and filter like a pro"
        subtitle="Slice your data by team, product, geography, or timeframe to unlock powerful insights specific to your business case."
        badgeLabel="Advanced Filters"
        badgeVariant="ghost"
        badgeClassName="pl-0! text-(--primary)!"
        badgeIcon={<TbFilterSearch />}
        imageSrc={AdvancedFiltersIllustrtation}
        imageMeta="InisghtBoard - Advanced Filters"
        ctaHref="/contact"
        ctaText="Get Started"
        direction={'col'}
        responsiveDirection={'mdRowReverse'}
      />
    </>
  )
}
