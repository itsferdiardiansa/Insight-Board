import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'

type AuthButtonProps = {
  className?: string
}

export const AuthButton: React.FC<AuthButtonProps> = ({ className }) => {
  return (
    <div className={cn('flex gap-space-sm items-center', className)}>
      <Button
        size="lg"
        variant="ghost"
        // className="max-lg:p-0! max-lg:text-xl max-lg:font-semibold"
        className="max-lg:p-0!"
        asChild
      >
        <Link href={'/signin'}>Sign in</Link>
      </Button>
    </div>
  )
}
