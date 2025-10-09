import {
  FeatureArticle,
  LatestPosts,
} from '@/features/article/components/feature-article'

export const ArticleShowcase: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-space-xl lg:gap-space-4xl">
      <div className="relative w-full lg:w-3/5">
        <FeatureArticle />
      </div>
      <div className="flex-1">
        <LatestPosts />
      </div>
    </div>
  )
}
