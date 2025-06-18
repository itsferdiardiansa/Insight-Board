import { PropsWithChildren } from 'react'
import type { Viewport } from 'next'
import { JetBrains_Mono, Source_Sans_3 } from 'next/font/google'

import { defaultMetadata } from '@/config/site-metadata'
import { AnimationProvider } from '@/components/providers/animation-provider'
import { JsonLd } from '@/components/core/seo'
import { websiteSchema } from '@/schema/website'
import { homepageSchema } from '@/schema/homepage'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4f46e5',
}
export const metadata = defaultMetadata

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <JsonLd data={[websiteSchema, homepageSchema]} />
      </head>
      <body className="antialiased font-sans text-neutral-800 bg-slate-50">
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
