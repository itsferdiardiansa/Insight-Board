import { ArticleShowcase } from './_components/article-showcase'
import { BasedCategorArticle } from '@/features/article/components/feature-article'

const basedCategories = [
  { id: 1, name: 'Analytics' },
  { id: 2, name: 'Product' },
  { id: 3, name: 'User Experience' },
  { id: 4, name: 'Product Integration' },
]

export default function ArticlePage() {
  return (
    <div className="article">
      <div className="layout-wrapper section-stack">
        <ArticleShowcase />
      </div>

      <div className="bg-radial-[at_50%_75%] from-pink-50 via-purple-50 to-indigo-50 to-90%">
        <div className="layout-wrapper section-stack">
          <BasedCategorArticle
            title="Most Inisightful"
            limit={3}
            actionLabel="See More Insightful"
          />
        </div>
      </div>

      <div className="bg-white">
        <div className="layout-wrapper section-stack">
          <BasedCategorArticle
            title="Based on category"
            categories={basedCategories}
            showCategory
          />
        </div>
      </div>
    </div>
  )
}
