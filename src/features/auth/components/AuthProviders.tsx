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
        variant="outline"
        className="flex items-center gap-2 justify-center"
      >
        <FcGoogle className="text-xl" />
        <span className="leading-[18px]">{actionText} with Google</span>
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 justify-center"
      >
        <FaFacebookF className="text-blue-600 text-xl" />
        <span className="leading-[18px]">{actionText} with Meta</span>
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 justify-center"
      >
        <FaApple className="text-xl" />
        <span className="leading-[18px]">{actionText} with Apple</span>
      </Button>
    </div>
  )
}
