import { siteConfig } from '@/config/site-config'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon-192.png`,
  sameAs: [
    'https://www.linkedin.com/company/insightboard',
    'https://twitter.com/insightboard',
  ],
}
