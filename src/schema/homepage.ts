import { siteConfig } from '@/config/site-config'

export const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Insight Board - Transform Your Revenue',
  description:
    'Insight Board is a SaaS platform that turns business data into real-time insights and predictive analytics.',
  url: siteConfig.url,
  about: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
}
