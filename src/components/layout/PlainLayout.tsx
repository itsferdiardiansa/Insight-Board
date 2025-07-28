'use client'

import { Fragment, type PropsWithChildren } from 'react'
import { BrandLogo } from '@/components/ui/brand-logo'
import { extractSlots } from '@/utils/slots'

type PlainLayoutProps = PropsWithChildren

const PlainLayoutHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>
}

const PlainLayoutComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const { slots, children: mainContent } = extractSlots(children, {
    Header: PlainLayout.Header,
  })

  return (
    <Fragment>
      <header className="fixed top-0 inset-x-0 z-[50] transition-all duration-300 bg-white shadow-sm shadow-gray-100/90">
        <div className="flex items-center py-(--space-md)">
          <div className="flex justify-between items-center gap-4 px-(--space-md)">
            <BrandLogo />
          </div>

          <div className="ml-(--space-xl)">{slots.Header}</div>
        </div>
      </header>

      <main className="main-app pt-[86px]">{mainContent}</main>
    </Fragment>
  )
}

export const PlainLayout =
  PlainLayoutComponent as React.FC<PlainLayoutProps> & {
    Header: typeof PlainLayoutHeader
  }

PlainLayout.Header = PlainLayoutHeader
