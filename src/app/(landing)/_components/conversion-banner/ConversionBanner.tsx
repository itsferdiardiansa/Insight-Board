'use client'

import * as React from 'react'
import Link from 'next/link'
import { Statistics } from './Statistics'
import { Button } from '@/components/ui/button'

const ConversionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-violet-800 via-violet-600 to-purple-500 overflow-hidden">
      <div className="layout-wrapper">
        <div className="absolute bottom-[-100px] left-[-100px] w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute top-[-80px] right-[-180px] w-96 h-96 bg-white/10 rounded-full" />

        <div className="content-block relative flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex-col">
            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-50">
                Ready to get started? Unlock the tools to accelerate your
                growth.
              </h1>

              <p className="mt-4 lg:mt-8 text-base lg:text-lg leading-7 text-neutral-50">
                Transform your business with powerful analytics and real-time
                insights. Join over 13,000 successful teams already using
                InsightBoard to drive their growth and success.
              </p>
            </div>

            <div className="mt-8">
              <Statistics />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-start lg:justify-center gap-4">
            <Button variant={'secondary'} size={'lg'} pill asChild>
              <Link href={'/signin'}>Get Started Now</Link>
            </Button>

            <Button variant={'primary'} size={'lg'} pill asChild>
              <Link href={'/free-demo'}>Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversionBanner
