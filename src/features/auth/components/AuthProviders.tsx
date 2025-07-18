import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaFacebookF } from 'react-icons/fa'

type AuthProvidersProps = {
  type: 'signin' | 'signup'
}

export function AuthProviders({ type }: AuthProvidersProps) {
  const actionText = type === 'signin' ? 'Sign in' : 'Sign up'

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant={'outlineSecondary'}
        icon={<FcGoogle className="text-2xl" />}
      >
        {actionText} with Google
      </Button>
      <Button
        variant={'outlineSecondary'}
        icon={<FaFacebookF className="text-2xl" />}
      >
        {actionText} with Meta
      </Button>
      <Button
        variant={'outlineSecondary'}
        icon={<FaApple className="text-2xl" />}
      >
        {actionText} with Apple
      </Button>
    </div>
  )
}
