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
          'w-full flex flex-col lg:flex-row flex-wrap lg:gap-8 justify-between lg:items-center md:text-lg',
          className
        )}
      >
        <button className="flex-1 flex gap-2 self-stretch my-auto rounded w-[111px] items-center hover:text-neutral-300 transition-colors">
          <span>English (US)</span>
        </button>

        <div className="flex flex-wrap gap-2 lg:gap-8 self-stretch my-auto max-md:max-w-full">
          <nav className="flex flex-auto gap-6 items-center whitespace-nowrap">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="self-stretch my-auto hover:text-neutral-300 transition-colors"
              >
                {label}
              </Link>
            ))}

            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-600 hover:bg-neutral-500 transition"
                  aria-label={label}
                >
                  <Icon className="text-neutral-100 text-2xl" />
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
