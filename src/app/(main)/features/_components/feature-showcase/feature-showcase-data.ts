import totalRevenueAnimation from '@/assets/lotties/total-revenue.json'
// import automationSettingsAnimation from '@/assets/lotties/automation-flows.json'
import customIntegrationAnimation from '@/assets/lotties/custom-integration.json'
import predictiveInsightsAnimation from '@/assets/lotties/predictive-insights.json'

const features = [
  {
    title: 'Real-time Analytics',
    description:
      'Track and visualize performance as it happens with interactive dashboards and intelligent insights tailored to your business.',
    animation: totalRevenueAnimation,
  },
  // {
  //   title: 'Smart Automation',
  //   description:
  //     'Eliminate manual work with rule-based automation that streamlines processes and boosts operational efficiency.',
  //   cls: 'w-full absolute inset-0 m-auto',
  //   animation: automationSettingsAnimation,
  // },
  {
    title: 'Custom Integrations',
    description:
      'Seamlessly connect your favorite apps and services to create an integrated workflow across your entire stack.',
    animation: customIntegrationAnimation,
  },
  {
    title: 'Predictive Insights',
    description:
      'Leverage machine learning to forecast trends and make proactive decisions backed by real-time data.',
    animation: predictiveInsightsAnimation,
  },
]

export default features
