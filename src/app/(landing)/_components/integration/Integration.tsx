'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

import ShopifyLogo from '@/assets/logo/integration-tools/shopify.svg'
import StripeLogo from '@/assets/logo/integration-tools/stripe.svg'
import GoogleLogo from '@/assets/logo/integration-tools/google.svg'
import HubspotLogo from '@/assets/logo/integration-tools/hubspot.svg'
import IntercomLogo from '@/assets/logo/integration-tools/intercom.svg'
import SlackLogo from '@/assets/logo/integration-tools/slack.svg'
import ZapierLogo from '@/assets/logo/integration-tools/zapier.svg'
import NotionLogo from '@/assets/logo/integration-tools/notion.svg'

const integrations = [
  { name: 'Shopify', logo: <ShopifyLogo /> },
  { name: 'Stripe', logo: <StripeLogo /> },
  { name: 'Google Analytics', logo: <GoogleLogo /> },
  { name: 'Slack', logo: <SlackLogo /> },
  { name: 'Zapier', logo: <ZapierLogo /> },
  { name: 'Notion', logo: <NotionLogo /> },
  { name: 'HubSpot', logo: <HubspotLogo /> },
  { name: 'Intercom', logo: <IntercomLogo /> },
]

const Integration: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    })
  }, [])

  useEffect(() => {
    if (!titleRef.current) return

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  useEffect(() => {
    if (!descRef.current) return

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div className="content-block">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 ref={titleRef} className="heading-display opacity-0">
            Seamless integrations with other great tools
          </h1>
          <h2 ref={descRef} className="heading-sub opacity-0">
            Connect your workflow with platforms your team already loves.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative mt-18 overflow-hidden opacity-0"
        >
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <div ref={trackRef} className="flex gap-12">
            {[...integrations, ...integrations].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="w-16 lg:w-24 h-16 lg:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                title={item.name}
              >
                {item.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integration
