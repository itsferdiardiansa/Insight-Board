'use client'

import { useRef } from 'react'
import { type BannerProps, Banner } from '@/components/layout/banner'
import { HomeBannerContent } from './HomeBannerContent'
import { HomeBannerImage } from './HomeBannerImage'

const HomeBanner: React.FC = () => {
  const ctaLinks = useRef<BannerProps['ctas']>([
    {
      variant: 'primary',
      link: '/contact',
      label: 'Request Demo',
    },
    {
      variant: 'outlineSecondary',
      link: '/features',
      label: 'Explore Features',
    },
  ])

  return (
    <Banner ctas={ctaLinks.current} className="pt-0!">
      <Banner.Content>
        <HomeBannerContent />
      </Banner.Content>

      <Banner.Image>
        <HomeBannerImage />
      </Banner.Image>
    </Banner>
  )
}

export default HomeBanner
