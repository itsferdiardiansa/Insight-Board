'use client'

import { useRef } from 'react'
import { type BannerProps, Banner } from '@/components/layout/banner'
import { HomeBannerContent } from './HomeBannerContent'
import { HomeBannerImage } from './HomeBannerImage'
import Link from 'next/link'

const HomeBanner: React.FC = () => {
  const ctaLinks = useRef<BannerProps['ctas']>([
    {
      variant: 'primary',
      children: <Link href={'/contact'}>Request Demo</Link>,
    },
    {
      variant: 'outlineSecondary',
      children: <Link href={'/learn-more'}>Learn More</Link>,
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
