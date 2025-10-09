'use client'
import { FooterContact } from './FooterContact'
import { FooterNavColumn } from './FooterNavColumn'
import { AppFooterBottom } from './AppFooterBottom'
import { SectionShell } from '../sections'
import {
  companyLinks,
  discoverLinks,
  helpLinks,
  productLinks,
} from './footer-nav-links'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const AppFooter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const topFooterRef = useRef<HTMLDivElement>(null)
  const bottomFooterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        topFooterRef.current,
        {
          y: -40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
          },
        }
      )

      gsap.fromTo(
        bottomFooterRef.current,
        {
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  })

  return (
    <footer className="bg-secondary-intense-pressed text-inverse">
      <div className="layout-wrapper ">
        <SectionShell
          className="content-block--py"
          gapSize={'sm'}
          direction={'col'}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-space-md border-b border-secondary pb-space-md">
            <div className="flex-1">
              <FooterContact />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 flex-1 gap-space-md xl:justify-items-end">
              <FooterNavColumn title="Product" links={productLinks} />
              <FooterNavColumn title="Discover" links={discoverLinks} />
              <FooterNavColumn title="Help Center" links={helpLinks} />
              <FooterNavColumn title="Company" links={companyLinks} />
            </div>
          </div>

          <AppFooterBottom />
        </SectionShell>
      </div>
    </footer>
  )
}
