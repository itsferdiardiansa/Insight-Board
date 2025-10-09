'use client'

import Link from 'next/link'
import { forwardRef } from 'react'
import { footerLinks, socialLinks } from './footer-nav-links'
import { siteConfig } from '@/config/site-config'
import { cn } from '@/utils/tailwind'

type AppFooterBottomProps = {
  className?: string
}

export const AppFooterBottom = forwardRef<HTMLDivElement, AppFooterBottomProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full flex flex-col lg:flex-row flex-wrap gap-space-sm justify-between lg:items-center text-body-md',
          className
        )}
      >
        <button className="flex-1 w-[111px] flex gap-space-xs self-stretch my-auto rounded items-center hover:text-subtlest transition-colors">
          <span>English (US)</span>
        </button>

        <div className="max-md:max-w-full flex flex-wrap items-center gap-space-xs lg:gap-space-md self-stretch my-auto">
          <nav className="flex flex-col lg:flex-row items-center gap-space-md whitespace-nowrap">
            <div className="flex items-center gap-space-sm">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="self-stretch my-auto hover:text-subtlest transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex gap-space-md">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-intense"
                  aria-label={label}
                >
                  <Icon className="text-inverse text-2xl" />
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex gap-1 my-auto">
          <span>©</span>
          <span>2025</span>
          <span>{siteConfig.name}</span>
        </div>
      </div>
    )
  }
)

AppFooterBottom.displayName = 'AppFooterBottom'
