import { BrandLogo } from '@/components/ui/brand-logo'
import { siteConfig } from '@/config/site-config'

export const FooterContact: React.FC = () => {
  return (
    <div className="min-w-60 max-md:max-w-full">
      <div className="w-full max-md:max-w-full flex flex-col justify-center">
        <BrandLogo />

        <p className="mt-2">
          we built a modern analytics and performance measurements
        </p>
      </div>

      <address className="w-full max-md:max-w-full flex flex-col justify-center items-start mt-space-md not-italic">
        <a
          href="mailto:hello@example.com"
          className="gap-2.5 self-stretch whitespace-nowrap hover:text-subtlest transition-colors"
        >
          {siteConfig.mail}
        </a>
        <a
          href="tel:+12345678901"
          className="gap-space-md self-stretch mt-space-xs max-w-full hover:text-subtlest transition-colors"
        >
          {siteConfig.phone}
        </a>
      </address>
    </div>
  )
}
