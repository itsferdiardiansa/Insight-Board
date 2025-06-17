'use client'

import { AuthForm } from '../components/AuthForm'
import { AuthProviders } from '../components/AuthProviders'
import { AuthLegalNotice } from '../components/AuthLegalNotice'
import { AuthAnimation } from '../components/AuthAnimation'
import { BrandLogo } from '@/components/ui/brand-logo'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex">
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center p-8">
        <div className="flex justify-center">
          <BrandLogo />
        </div>

        <div className="max-w-md w-full mx-auto space-y-6 mt-18 lg:mt-32">
          <h1 className="text-3xl font-bold text-neutral-800 text-center">
            Sign in to InsightBoard
          </h1>

          <AuthForm type="signin" />
          <AuthProviders type="signin" />
          <AuthLegalNotice type="signin" />
        </div>
      </div>

      <AuthAnimation
        heading="Smarter business insights"
        subheading="Transform your business with real-time insights, advanced reporting, and AI-powered predictions."
      />
    </div>
  )
}
