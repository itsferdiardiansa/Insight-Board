'use client'

import Link from 'next/link'
import { footerLinks, socialLinks } from './footer-nav-links'
import { siteConfig } from '@/config/site-config'

export const AppFooterBottom: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row flex-wrap lg:gap-8 justify-between lg:items-center">
      <button className="flex-1 flex gap-2 self-stretch my-auto rounded w-[111px] items-center hover:text-slate-700 transition-colors">
        <span>English (US)</span>
      </button>

      <div className="flex flex-wrap gap-2 lg:gap-8 self-stretch my-auto max-md:max-w-full">
        <nav className="flex flex-auto gap-6 items-center whitespace-nowrap">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="self-stretch my-auto hover:text-slate-700 transition-colors"
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
                className="p-2 rounded-full bg-violet-50 hover:bg-violet-100 transition"
                aria-label={label}
              >
                <Icon className="text-2xl" />
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
