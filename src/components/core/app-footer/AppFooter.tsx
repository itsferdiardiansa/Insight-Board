'use client'
import * as React from 'react'
import { FooterLogo } from './FooterLogo'
import { FooterNavColumn } from './FooterNavColumn'
import { AppFooterBottom } from './AppFooterBottom'

const productLinks = [
  { text: 'Analytics', href: '/analytics' },
  { text: 'Collaboration', href: '/collaboration' },
  { text: 'Integrations', href: '/integrations' },
  { text: 'Mobile App', href: '/mobile-app' },
  { text: 'Developer API', href: '/api' },
]

const discoverLinks = [
  { text: 'Resources', href: '/resources' },
  { text: 'Community', href: '/community' },
  { text: 'Events', href: '/events' },
  { text: 'Case Studies', href: '/case-studies' },
  { text: 'Blog', href: '/blog' },
]

const helpLinks = [
  { text: 'Documentation', href: '/docs' },
  { text: 'Support', href: '/support' },
  { text: 'API Status', href: '/api-status' },
  { text: 'Guides', href: '/guides' },
  { text: 'FAQ', href: '/faq' },
]

const companyLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Careers', href: '/careers' },
  { text: 'Press Kit', href: '/press' },
  { text: 'Contact', href: '/contact' },
  { text: 'Partners', href: '/partners' },
]

export const AppFooter = () => {
  return (
    <footer className="flex flex-col justify-center">
      <div className="layout-wrapper">
        <div className="flex flex-col items-start">
          <div className="content-block max-xl:py-8!">
            <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-200 pb-8">
              <div className="flex-1">
                <FooterLogo />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 flex-1 gap-10 xl:justify-items-end">
                <FooterNavColumn title="Product" links={productLinks} />
                <FooterNavColumn title="Discover" links={discoverLinks} />
                <FooterNavColumn title="Help Center" links={helpLinks} />
                <FooterNavColumn title="Company" links={companyLinks} />
              </div>
            </div>

            <AppFooterBottom />
          </div>
        </div>
      </div>
    </footer>
  )
}
