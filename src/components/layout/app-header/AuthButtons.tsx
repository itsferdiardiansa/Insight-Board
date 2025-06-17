import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FiUser, FiBox } from 'react-icons/fi'

export const AuthButtons: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        className="flex-1"
        variant="secondary"
        size="sm"
        icon={<FiUser />}
        asChild
      >
        <Link href={'/signin'}>Sign in</Link>
      </Button>

      <Button
        className="flex-1"
        variant="primary"
        size="sm"
        icon={<FiBox />}
        asChild
      >
        <Link href={'/signup'}>Sign Up</Link>
      </Button>
    </div>
  )
}
