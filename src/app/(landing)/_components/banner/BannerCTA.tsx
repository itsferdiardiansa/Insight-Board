import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const BannerCTA: React.FC = () => {
  return (
    <div className="flex gap-6 items-start max-w-full font-semibold">
      <Button variant="primary">Request a Demo</Button>
      <Button variant="outlinePrimary" asChild>
        <Link href={'/learn-more'}>Learn More</Link>
      </Button>
    </div>
  )
}
