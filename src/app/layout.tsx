import { PropsWithChildren } from 'react'
import type { Viewport } from 'next'
import { Nunito } from 'next/font/google'

import { defaultMetadata } from '@/config/site-metadata'
import { AnimationProvider } from '@/context/gsap-animation'
import { JsonLd } from '@/components/seo'
import { websiteSchema } from '@/schema/website'
import { homepageSchema } from '@/schema/homepage'

import '@/styles/globals.css'
import { cn } from '@/utils/tailwind'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <JsonLd data={[websiteSchema, homepageSchema]} />
      </head>
      <body className={cn('antialiased text-neutral-800', nunito.variable)}>
        <AnimationProvider>
          <div className="root-app">{children}</div>
        </AnimationProvider>
      </body>
    </html>
  )
}
