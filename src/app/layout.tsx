import type { Metadata } from 'next'
import { JetBrains_Mono, Source_Sans_3 } from 'next/font/google'
import '@/styles/globals.css'

import { AnimationProvider } from '@/components/providers/animation-provider'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
