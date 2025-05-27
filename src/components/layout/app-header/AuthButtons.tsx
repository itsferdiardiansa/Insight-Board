import { Button } from '@/components/ui/button'
import { FiUser, FiBox } from 'react-icons/fi'

export const AuthButtons: React.FC = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        className="flex-1"
        variant="secondary"
        size="md"
        icon={<FiUser />}
      >
        Sign in
      </Button>

      <Button className="flex-1" variant="primary" size="md" icon={<FiBox />}>
        Sign Up
      </Button>
    </div>
  )
}
