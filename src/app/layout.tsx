import { PropsWithChildren } from 'react'
import type { Viewport } from 'next'

import { defaultMetadata } from '@/config/site-metadata'
import { AnimationProvider } from '@/context/gsap-animation'
import { JsonLd } from '@/components/core/seo'
import { websiteSchema } from '@/schema/website'
import { homepageSchema } from '@/schema/homepage'

import '@/styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4f46e5',
}
export const metadata = defaultMetadata

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <JsonLd data={[websiteSchema, homepageSchema]} />
      </head>
      <body className="antialiased text-neutral-800">
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
