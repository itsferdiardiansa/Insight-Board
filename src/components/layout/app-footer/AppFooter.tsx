'use client'
import { FooterLogo } from './FooterLogo'
import { FooterNavColumn } from './FooterNavColumn'
import { AppFooterBottom } from './AppFooterBottom'
import { SectionShell } from '../section'
import {
  companyLinks,
  discoverLinks,
  helpLinks,
  productLinks,
} from './footer-nav-links'

export const AppFooter: React.FC = () => {
  return (
    <footer className="layout-wrapper">
      <SectionShell
        className="content-block--py"
        gapSize={'sm'}
        direction={'col'}
      >
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
      </SectionShell>
    </footer>
  )
}
