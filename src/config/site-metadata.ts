import type { Metadata } from 'next'
import { siteConfig } from './site-config'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Insight Board',
    template: '%s | Insight Board',
  },
  description:
    'Insight Board helps you unlock real-time analytics, optimize performance, and accelerate growth through intuitive dashboards and AI-powered insights.',
  metadataBase: new URL(siteConfig.url),
  keywords: [
    'analytics dashboard',
    'business intelligence',
    'AI analytics',
    'data visualization',
    'Insight Board',
  ],
  openGraph: {
    title: 'Insight Board | Smarter Business Analytics',
    description:
      'Unlock growth with real-time dashboards and AI-powered reporting.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Insight Board Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: 'Smarter analytics for fast-moving teams.',
    creator: siteConfig.twitter,
    images: [`${siteConfig.url}/og-image.png`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  applicationName: siteConfig.name,
  category: 'Technology',
}
