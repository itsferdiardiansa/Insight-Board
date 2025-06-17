import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/form/input'

export function AuthForm({ type }: { type: 'signin' | 'signup' }) {
  return (
    <>
      <form className="space-y-6">
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />

        {type === 'signup' && (
          <Input label="Confirm Password" type="password" />
        )}

        {type === 'signin' && (
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-violet-600" />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-violet-700 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <Button type="submit" fullWidth>
          {type === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>

      <div className="flex items-center my-4 gap-2 text-neutral-400 text-sm">
        <hr className="flex-1 border-gray-200" />
        <span>or {type.toLowerCase()} with</span>
        <hr className="flex-1 border-gray-200" />
      </div>
    </>
  )
}
