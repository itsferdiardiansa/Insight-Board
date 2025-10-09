'use client'

import { Card } from '@/components/ui/card'
import type { CardProps } from '@/components/ui/card/Card'
import AuthorWriting from '@/assets/images/author-writing.jpg'
import { useMemo } from 'react'

export const FeatureArticle: React.FC = () => {
  const cardTextSize: CardProps['textSize'] = useMemo(
    () => ({
      title: '3xl',
      description: 'lg',
    }),
    []
  )

  const badgeProps = useMemo(
    () => ({
      label: 'Insight',
    }),
    []
  )

  return (
    <Card
      title="The true impact of onboarding UX on retention"
      description="A seamless onboarding journey can boost retention by up to 50%. Explore strategies to turn first-time users into loyal customers."
      thumbnail={AuthorWriting}
      thumbnailMeta="Feature Insight"
      roundedSize="lg"
      link="/article/lorem-feature-ipsum"
      badge={badgeProps}
      textSize={cardTextSize}
      padding="lg"
      metaItems={['Product', '08.2025']}
      footerActionLabel="Read more"
    />
  )
}
