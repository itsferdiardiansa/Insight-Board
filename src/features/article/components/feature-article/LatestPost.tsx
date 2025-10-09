import { PostPreview } from './PostPreview'

const posts = [
  {
    title: 'How to pick your billing model as a SaaS founder',
    category: 'Finance',
    date: '08.2025',
  },
  {
    title: 'Customer churn: reduce it with actionable dashboards',
    category: 'Data',
    date: '08.2025',
  },
  {
    title: 'When to invest in custom-built CRM tools',
    category: 'Operations',
    date: '08.2025',
  },
  {
    title: 'Nurturing freemium users into power users',
    category: 'Growth',
    date: '08.2025',
  },
]

export const LatestPosts: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="pb-space-md lg:pb-space-sm lg:border-b lg:border-default">
        <h1 className="text-heading-3xl font-semibold!">Latest Posts</h1>
      </div>

      <div className="flex flex-row lg:flex-col max-lg:overflow-x-auto no-scrollbar">
        {posts.map((post, i) => (
          <PostPreview key={i} {...post} />
        ))}
      </div>
    </div>
  )
}
