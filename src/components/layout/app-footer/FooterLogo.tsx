import { BrandLogo } from '@/components/ui/brand-logo'
import { siteConfig } from '@/config/site-config'

export const FooterLogo: React.FC = () => {
  return (
    <section className="min-w-60 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-sm text-neutral-800 max-md:max-w-full">
        <BrandLogo />
        <p className="mt-2 text-neutral-800">
          we built a modern analytics and performance measurements
        </p>
      </div>
      <address className="flex flex-col justify-center items-start mt-6 w-full text-base text-slate-500 max-md:max-w-full not-italic">
        <a
          href="mailto:hello@insightboard.com"
          className="gap-2.5 self-stretch whitespace-nowrap hover:text-slate-700 transition-colors"
        >
          {siteConfig.mail}
        </a>
        <a
          href="tel:+12345678901"
          className="gap-8 self-stretch mt-2 max-w-full hover:text-slate-700 transition-colors"
        >
          {siteConfig.phone}
        </a>
      </address>
    </section>
  )
}
