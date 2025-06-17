import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { JetBrains_Mono, Source_Sans_3 } from 'next/font/google'

import { AnimationProvider } from '@/components/providers/animation-provider'
import '@/styles/globals.css'

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Insight Board',
  description: 'Transform your revenue now',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="antialiased font-sans text-neutral-800 bg-slate-50">
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
