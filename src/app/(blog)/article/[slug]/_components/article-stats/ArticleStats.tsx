import Link from 'next/link'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export const ArticleStats = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
      <div className="flex items-center space-x-gap-sm">
        <span className="text-subtle font-medium">Share:</span>
        <Button variant="secondary" size="sm" asChild>
          <Link href="#" target="_blank">
            <BsTwitter />
            <span>Twitter</span>
          </Link>
        </Button>
        <Button variant="secondary" size="sm" asChild>
          <Link href="#" target="_blank">
            <BsLinkedin />
            <span>Linkedin</span>
          </Link>
        </Button>
      </div>
      <div className="flex items-center space-x-gap-sm">
        <Button innerClassName="pl-0!" variant="ghost" icon={<FaRegHeart />}>
          42
        </Button>

        <Button variant="ghost" icon={<FaRegCommentDots />}>
          18
        </Button>
      </div>
    </div>
  )
}
