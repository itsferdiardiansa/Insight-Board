'use client'

import { AuthForm } from '../components/AuthForm'
import { AuthProviders } from '../components/AuthProviders'
import { AuthLegalNotice } from '../components/AuthLegalNotice'
import { AuthAnimation } from '../components/AuthAnimation'
import { BrandLogo } from '@/components/ui/brand-logo'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center p-8">
        <div className="flex justify-center">
          <BrandLogo />
        </div>

        <div className="max-w-md w-full mx-auto space-y-6 mt-18 lg:mt-32">
          <h1 className="text-3xl font-bold text-neutral-800 text-center">
            Create your InsightBoard account
          </h1>

          <AuthForm type="signup" />
          <AuthProviders type="signup" />
          <AuthLegalNotice type="signup" />
        </div>
      </div>

      <AuthAnimation
        heading="Join teams that lead with data"
        subheading="Create your InsightBoard account to unlock powerful analytics and collaboration tools."
      />
    </div>
  )
}
