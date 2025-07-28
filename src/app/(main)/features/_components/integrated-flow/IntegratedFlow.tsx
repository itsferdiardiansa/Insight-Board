'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import { SectionShell, SectionHeader } from '@/components/layout/sections'
import { siteConfig } from '@/config/site-config'
import integratedFlows from './integrated-flow-data'

import AnthonyWhite from '@/assets/images/leaders/anthony-white.jpg'

export const IntegratedFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const quoteRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const userInfoRef = useRef<HTMLDivElement>(null)

  const featureItemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          {
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      if (avatarRef.current) {
        gsap.fromTo(
          avatarRef.current,
          {
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: avatarRef.current,
              start: 'top 90%',
            },
          }
        )
      }

      if (userInfoRef.current) {
        gsap.fromTo(
          userInfoRef.current,
          {
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: userInfoRef.current,
              start: 'top 90%',
            },
          }
        )
      }

      const items = featureItemRefs.current.filter(Boolean)
      if (items.length) {
        gsap.fromTo(
          items,
          {
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: items[0],
              start: 'top 85%',
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell ref={containerRef} direction="col" gapSize="sm">
      <SectionHeader
        title="InsightBoard simplifies your analytics workflows."
        badgeLabel="How InsightBoard works?"
        badgeVariant="secondary"
        textAlign="center"
        responsiveTextAlign="mdLeft"
      />

      <div className="mt-(--space-md) flex flex-col gap-(--space-md)">
        <div ref={quoteRef} className="max-w-lg max-md:text-center opacity-0">
          <p className="text-lg text-neutral-500">
            &quot;Before {siteConfig.name}, our team jumped between Stripe
            dashboards, Notion reports, and messy Google Sheets. Now,{' '}
            <strong className="text-neutral-800">
              we see everything in one integrated view
            </strong>{' '}
            — making reporting and decision-making 10x faster.&quot;
          </p>
        </div>

        <div className="flex gap-(--space-sm)">
          <div
            ref={avatarRef}
            className="w-12 h-12 rounded-full overflow-hidden opacity-0"
          >
            <Image
              src={AnthonyWhite}
              alt="Engineering Manager of Notion"
              width={76}
              height={76}
            />
          </div>

          <div
            ref={userInfoRef}
            className="flex flex-col justify-center text-lg opacity-0"
          >
            <p className="text-neutral-800 font-bold">Alex P</p>
            <p className="text-neutral-500">Engineering Manager of Notion</p>
          </div>
        </div>

        <div className="mt-(--space-md) flex flex-col md:flex-row gap-(--space-md) text-lg">
          {integratedFlows.map((feature, index) => (
            <div
              key={index}
              ref={el => {
                featureItemRefs.current[index] = el
              }}
              className="flex-1 flex flex-col gap-(--space-sm) max-md:border-b md:border-l border-gray-200 max-md:pb-(--space-lg) md:pl-(--space-lg) opacity-0"
            >
              <h4 className="font-bold">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
