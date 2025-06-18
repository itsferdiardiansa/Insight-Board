const productPlans = [
  {
    title: 'Starter',
    subtitle: 'Perfect for small teams getting started',
    price: 29,
    features: [
      {
        group: 'Analytics & Insights',
        items: [
          { name: 'Standard Metrics', value: 'Up to 5 dashboards' },
          { name: 'Out-of-the-Box Dashboards', value: true },
          { name: 'Custom Dashboards', value: false },
          { name: 'Real-Time Reporting', value: false },
          { name: 'Forecast Monitoring', value: false },
        ],
      },
      {
        group: 'Integrations',
        items: [
          { name: '850+ Integrations', value: true },
          { name: 'Custom API Access', value: false },
          { name: 'Slack & Email Alerts', value: false },
        ],
      },
      {
        group: 'Collaboration',
        items: [
          { name: 'User Accounts', value: 'Up to 5 users' },
          { name: 'Team Workspaces', value: true },
          { name: 'Live Commenting', value: false },
        ],
      },
      {
        group: 'Security',
        items: [
          { name: 'SSO with SAML', value: false },
          { name: 'Role-Based Access', value: false },
          { name: 'Data Encryption', value: false },
        ],
      },
    ],
  },

  {
    title: 'Professional',
    subtitle: 'Scale with advanced capabilities',
    price: 79,
    isRecommended: true,
    features: [
      {
        group: 'Analytics & Insights',
        items: [
          { name: 'Standard Metrics', value: 'Up to 15 dashboards' },
          { name: 'Out-of-the-Box Dashboards', value: true },
          { name: 'Custom Dashboards', value: true },
          { name: 'Real-Time Reporting', value: true },
          { name: 'Forecast Monitoring', value: true },
        ],
      },
      {
        group: 'Integrations',
        items: [
          { name: '850+ Integrations', value: true },
          { name: 'Custom API Access', value: true },
          { name: 'Slack & Email Alerts', value: false },
        ],
      },
      {
        group: 'Collaboration',
        items: [
          { name: 'User Accounts', value: 'Up to 50 users' },
          { name: 'Team Workspaces', value: true },
          { name: 'Live Commenting', value: false },
        ],
      },
      {
        group: 'Security',
        items: [
          { name: 'SSO with SAML', value: false },
          { name: 'Role-Based Access', value: true },
          { name: 'Data Encryption', value: false },
        ],
      },
    ],
  },

  {
    title: 'Enterprise',
    subtitle: 'Full platform access & customization',
    price: 149,
    features: [
      {
        group: 'Analytics & Insights',
        items: [
          { name: 'Standard Metrics', value: 'Unlimited dashboards' },
          { name: 'Out-of-the-Box Dashboards', value: true },
          { name: 'Custom Dashboards', value: true },
          { name: 'Real-Time Reporting', value: true },
          { name: 'Forecast Monitoring', value: true },
        ],
      },
      {
        group: 'Integrations',
        items: [
          { name: '850+ Integrations', value: true },
          { name: 'Custom API Access', value: true },
          { name: 'Slack & Email Alerts', value: true },
        ],
      },
      {
        group: 'Collaboration',
        items: [
          { name: 'User Accounts', value: 'Unlimited users' },
          { name: 'Team Workspaces', value: true },
          { name: 'Live Commenting', value: true },
        ],
      },
      {
        group: 'Security',
        items: [
          { name: 'SSO with SAML', value: true },
          { name: 'Role-Based Access', value: true },
          { name: 'Data Encryption', value: true },
        ],
      },
    ],
  },
]

export type Plan = (typeof productPlans)[number]
export type FeatureGroup = Plan['features'][number]
export type FeatureItem = FeatureGroup['items'][number]
export default productPlans
