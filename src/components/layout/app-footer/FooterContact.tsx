import { BrandLogo } from '@/components/ui/brand-logo'
import { siteConfig } from '@/config/site-config'

export const FooterContact: React.FC = () => {
  return (
    <div className="min-w-60 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full md:text-lg max-md:max-w-full">
        <BrandLogo />

        <p className="mt-2">
          we built a modern analytics and performance measurements
        </p>
      </div>

      <address className="flex flex-col justify-center items-start mt-6 w-full md:text-lg max-md:max-w-full not-italic">
        <a
          href="mailto:hello@insightboard.com"
          className="gap-2.5 self-stretch whitespace-nowrap hover:text-neutral-300 transition-colors"
        >
          {siteConfig.mail}
        </a>
        <a
          href="tel:+12345678901"
          className="gap-8 self-stretch mt-2 max-w-full hover:text-neutral-300 transition-colors"
        >
          {siteConfig.phone}
        </a>
      </address>
    </div>
  )
}
