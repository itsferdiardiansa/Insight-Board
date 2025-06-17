import Link from 'next/link'

export function AuthLegalNotice({ type }: { type: 'signin' | 'signup' }) {
  return (
    <div className="border-t border-gray-200 py-4 text-sm text-neutral-400 text-center space-y-2">
      <p>
        {type === 'signin'
          ? `Don't have an account?`
          : `Already have an account?`}{' '}
        <Link
          href={type === 'signin' ? '/signup' : '/signin'}
          className="text-violet-700 font-semibold hover:underline cursor-pointer"
        >
          {type === 'signin' ? 'Create one' : 'Sign in'}
        </Link>
      </p>

      <p>
        This site is protected by reCAPTCHA Enterprise and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-600"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-600"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </div>
  )
}
