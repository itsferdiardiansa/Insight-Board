import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

type PostPreviewProps = {
  title: string
  category: string
  date: string
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  category,
  date,
}) => {
  return (
    <div className="group max-lg:max-w-[16rem] flex-none relative max-lg:px-space-md first:pl-0 lg:py-space-sm max-lg:border-r last:border-r-0 lg:border-b border-inverse last:border-b-0">
      <Link
        href="/article/lorem-ipsum"
        className="w-full h-full absolute inset-0"
      />
      <div className="flex flex-col gap-space-sm">
        <div className="self-start">
          <Badge variant="ghost" size="md" className="p-0! text-primary!">
            {category}
          </Badge>
        </div>

        <h1 className="text-heading-lg font-semibold!">{title}</h1>

        <div className="hidden lg:block h-[24px] text-base overflow-hidden pointer-events-none">
          <div className="group-hover:-translate-y-6 transition-translate duration-300 ease-in-out">
            <div className="flex gap-space-sm text-subtlest">
              <p>{date}</p>
              <span>|</span>
              <p>7 min read</p>
            </div>

            <div className="relative">
              <p className="text-primary font-semibold">Read more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
