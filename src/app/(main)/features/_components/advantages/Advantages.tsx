'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PiPackageBold } from 'react-icons/pi'
import { FaArrowCircleRight } from 'react-icons/fa'
import { SectionHeader, SectionShell } from '@/components/layout/sections'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'

import UnifiedDashboardIllustration from '@/assets/illustrations/unified-dashboard.png'
import RealTimeAnalyticsIllustration from '@/assets/illustrations/real-time-analytics.png'
import CustomReportsIllustration from '@/assets/illustrations/custom-reports.png'
import PerformanceMonitoringUllustration from '@/assets/illustrations/performance-monitoring.png'

const advantages = [
  {
    nav: 'Unified Dashboard',
    title: 'All your tools in one place',
    description:
      'Connect platforms like Shopify, Stripe, Notion, and Slack into a single analytics dashboard. View your business data from every service in one clean, actionable interface.',
    image: UnifiedDashboardIllustration,
  },
  {
    nav: 'Real-time Analytics',
    title: 'Instant insights at your fingertips',
    description:
      'Monitor customer behavior, revenue trends, and operational metrics as they happen. With live data streaming from all sources, you never miss a beat.',
    image: RealTimeAnalyticsIllustration,
  },
  {
    nav: 'Custom Reports',
    title: 'Reports tailored to your business',
    description:
      'Generate detailed reports filtered by product, region, or performance. Share insights easily with your team or schedule automated exports to stay informed at all times.',
    image: CustomReportsIllustration,
  },
  {
    nav: 'Smart Alerts',
    title: 'Stay ahead with intelligent alerts',
    description:
      'Set up rules to detect anomalies, spikes, or drops in your key metrics. Get notified in Slack or email when something important happens—before it becomes a problem.',
    image: PerformanceMonitoringUllustration,
  },
]

export const Advantages: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animation refs
  const navContainerRef = useRef<HTMLDivElement>(null)
  const contentContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (navContainerRef.current) {
      gsap.fromTo(
        navContainerRef.current,
        {
          y: -40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: navContainerRef.current,
            start: 'top 85%',
          },
        }
      )
    }

    if (contentContainerRef.current) {
      gsap.fromTo(
        contentContainerRef.current,
        {
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentContainerRef.current,
            start: 'top 85%',
          },
        }
      )
    }
  }, [])

  useEffect(() => {
    const tab = tabRefs.current[openIndex]
    const indicator = indicatorRef.current
    if (tab && indicator) {
      const { offsetLeft, offsetWidth } = tab
      gsap.to(indicator, {
        left: offsetLeft,
        width: offsetWidth,
        duration: 0.5,
        ease: 'power3.out',
      })
    }
  }, [openIndex])

  return (
    <SectionShell direction="col" gapSize="md">
      <div className="relative flex-1 flex flex-col gap-(--space-lg) md:gap-(--space-3xl)">
        <SectionHeader
          title="Built for every kind of power user"
          subtitle="Powerful tools making your business look easy"
          badgeLabel="Advantages"
          badgeIcon={<PiPackageBold />}
          textAlign="center"
        />

        <div
          ref={navContainerRef}
          className="flex relative border-b-[1px] border-(--muted) overflow-x-auto md:overflow-visible opacity-0"
        >
          <div className="w-full flex justify-between">
            {advantages.map((item, index) => {
              const isOpen = index === openIndex
              return (
                <div
                  key={index}
                  ref={el => {
                    tabRefs.current[index] = el
                  }}
                  className={cn(
                    'flex-1 relative px-6 py-4 whitespace-nowrap transition-all duration-300 font-semibold cursor-pointer text-center border-b-[1px]',
                    isOpen
                      ? 'border-transparent text-neutral-800 font-bold'
                      : 'border-gray-100 text-neutral-400 hover:bg-white/5'
                  )}
                  onClick={() => setOpenIndex(index)}
                >
                  <h3 className="text-lg md:text-xl">{item.nav}</h3>
                </div>
              )
            })}
            <div
              ref={indicatorRef}
              className="absolute bottom-0 h-[2px] bg-gray-800 rounded transition-all"
              style={{ left: 0, width: 0 }}
            />
          </div>
        </div>
      </div>

      <div
        ref={contentContainerRef}
        className="relative overflow-hidden opacity-0"
      >
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={cn(
              'w-full flex flex-col-reverse lg:flex-row gap-(--space-xl) lg:gap-(--space-4xl) items-stretch transition-opacity duration-500',
              openIndex === index ? 'flex' : 'hidden'
            )}
          >
            <div className="flex-1 flex flex-col gap-(--space-md) lg:gap-(--space-2xl)">
              <div className="flex flex-col gap-(--space-md) lg:gap-(--space-xl)">
                <h2 className="max-w-lg text-2xl md:text-4xl lg:text-6xl text-neutral-800 font-bold">
                  {advantage.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-neutral-700">
                  {advantage.description}
                </p>
              </div>

              <div>
                <Button
                  variant="secondary"
                  icon={<FaArrowCircleRight />}
                  iconPosition="right"
                  asChild
                >
                  <Link href="/articles">Find out more</Link>
                </Button>
              </div>
            </div>

            <div className="w-full h-[380px] flex-1 relative rounded-2xl overflow-hidden">
              <Image
                className="object-contain"
                src={advantage.image}
                alt={advantage.title}
                width={590}
                height={374}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
