import Link from 'next/link'
import { useMemo } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { CardProps } from '@/components/ui/card/Card'
import AuthorWriting from '@/assets/images/author-writing.jpg'

type ArticleCategory = {
  id: number
  name: string
}

type BasedCategorArticleProps = {
  title: string
  limit?: number
  categories?: ArticleCategory[]
  showCategory?: boolean
  actionLabel?: string
}

export const BasedCategorArticle: React.FC<BasedCategorArticleProps> = ({
  title,
  limit = 10,
  categories,
  showCategory = false,
  actionLabel,
}) => {
  const hasCategories = Boolean(categories?.length)

  const cardTextSizes: CardProps['textSize'] = useMemo(
    () => ({
      title: '3xl',
      description: 'lg',
      footerAction: 'lg',
    }),
    []
  )

  return (
    <SectionShell direction="col" gapSize="lg">
      <div className="flex flex-col md:flex-row max-md:gap-(--space-md) md:justify-between">
        <SectionHeader title={title} textAlign="left" isAnimate={false} />

        {hasCategories && showCategory && (
          <div className="md:self-center">
            <div className="flex gap-(--space-sm) p-(--space-xs) overflow-x-auto no-scrollbar">
              {categories?.map((category, index) => (
                <Button
                  key={index}
                  variant="outlineSecondary"
                  size="lg"
                  rounded="full"
                  innerClassName="py-(--space-xs)!"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="grid md:grid-cols-3 gap-(--space-md)">
          {[...Array(limit)].map((_, index) => (
            <Card
              key={index}
              className="sm:max-md:flex sm:max-md:gap-(--space-md) sm:max-md:[&>*]:flex-1"
              title="What event feedback surveys tell you (and what they don't)"
              description="Event feedback can be a goldmine of useful insights to create better future events—but only if you know what it's telling you. See how to interpret event feedback surveys for more accurate analysis that you can use to make your next event even more successful."
              textSize={cardTextSizes}
              badge={{ label: 'Analytics', size: 'lg' }}
              roundedSize="lg"
              metaItems={['James Isack', '04.2025']}
              link="/article/lorem-ipsum"
              footerActionLabel="Read more"
            >
              <Card.Thumbnail
                src={AuthorWriting}
                alt="Event feedback"
                roundedSize="lg"
              />
            </Card>
          ))}
        </div>

        <div className="mt-(--space-md) flex justify-end">
          <Link
            href="/article/category"
            className="flex items-center gap-(--space-sm) text-xl font-bold pb-(--space-xs) border-b-2 border-neutral-400"
          >
            <span>{actionLabel ?? 'See More'}</span>
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}
