import { siteConfig } from '@/config/site-config'
import productPlans from '@/features/plan/data/product-plans'
import type {
  Plan,
  FeatureGroup,
  FeatureItem,
} from '@/features/plan/data/product-plans'

export function generatePricingSchema(plans: Plan[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: plans.map((plan, index) => {
      const features: string[] = plan.features.flatMap((group: FeatureGroup) =>
        group.items.map((item: FeatureItem) => {
          const value =
            typeof item.value === 'boolean'
              ? item.value
                ? 'Yes'
                : 'No'
              : item.value

          return `${group.group}: ${item.name} - ${value}`
        })
      )

      return {
        '@type': 'Product',
        name: plan.title,
        description: plan.subtitle,
        sku: plan.title.toLowerCase().replace(/\s+/g, '-'),
        position: index + 1,
        brand: {
          '@type': 'Brand',
          name: siteConfig.name,
        },
        offers: {
          '@type': 'Offer',
          url: `${siteConfig.url}/pricing#${plan.title.toLowerCase()}`,
          priceCurrency: 'USD',
          price: plan.price,
          availability: 'https://schema.org/InStock',
        },
        additionalProperty: features.map(feature => ({
          '@type': 'PropertyValue',
          name: feature,
          value: true,
        })),
      }
    }),
  }
}

export const pricingSchema = generatePricingSchema(productPlans)
