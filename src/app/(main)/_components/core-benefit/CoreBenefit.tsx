'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { SectionShell } from '@/components/layout/sections'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { TbFilterSearch, TbReportAnalytics, TbSpeedboat } from 'react-icons/tb'
import { MdOutlineIntegrationInstructions } from 'react-icons/md'
import { BsBarChartLine } from 'react-icons/bs'
import { Button } from '@/components/ui/button'
import { GoArrowRight } from 'react-icons/go'
import { cn } from '@/utils/tailwind'

const coreBenefits = [
  {
    title: 'Enterprise-grade data governance',
    description:
      'InsightBoard ensures full control, transparency, and auditability of your analytics—backed by secure, compliant infrastructure.',
    icon: <AiOutlineSafetyCertificate />,
  },
  {
    title: 'Lightning-fast performance',
    description:
      'Built with a highly-optimized engine that delivers insights in milliseconds—even on large data sets.',
    icon: <TbSpeedboat />,
  },
  {
    title: 'Smart filters & segmentation',
    description:
      'Break down your data by product, region, timeframe, or custom tags to get exactly what you need.',
    icon: <TbFilterSearch />,
  },
  {
    title: 'Automated report generation',
    description:
      'Send scheduled reports directly to Slack, Notion, or inbox—keeping teams in sync.',
    icon: <TbReportAnalytics />,
  },
  {
    title: 'Native integrations',
    description:
      'Seamlessly connect with Stripe, Notion, Shopify, Google Sheets, and other popular tools.',
    icon: <MdOutlineIntegrationInstructions />,
  },
  {
    title: 'Real-time analytics',
    description:
      'Track key business metrics live, so you never miss a spike or anomaly again.',
    icon: <BsBarChartLine />,
  },
]

const CoreBenefit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      )

      // Subheading animation
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: 'top 85%',
          },
        }
      )

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 85%',
          },
        }
      )

      // CTA Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell direction="col" ref={containerRef}>
      <div className="flex flex-col justify-stretch gap-(--space-4xl) text-neutral-300">
        <div className="flex flex-row gap-(--space-lg)">
          <div className="flex-1 flex flex-col gap-(--space-md)">
            <h1
              ref={headingRef}
              className="heading-display text-neutral-100! opacity-0"
            >
              Analytics + automation, all in one place
            </h1>

            <p
              ref={subheadingRef}
              className="heading-sub text-neutral-400! opacity-0"
            >
              InsightBoard connects your data from Stripe, Notion, Shopify, and
              more—turning raw information into real-time insights. Build
              dashboards, automate reports, and drive smarter decisions without
              writing code.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coreBenefits.map((item, index) => (
            <div
              key={index}
              ref={el => {
                cardsRef.current[index] = el
              }}
              className={cn(
                'flex flex-col justify-between gap-(--space-2xl) md:gap-(--space-4xl) py-(--space-md) md:px-(--space-md) opacity-0',
                'border-b md:border-r border-neutral-600',
                (index + 1) % 3 === 0 && 'border-r-0',
                index >= 3 && 'lg:border-b-0'
              )}
            >
              <div className="flex">
                <span className="text-4xl md:text-5xl">{item.icon}</span>
              </div>

              <div className="flex flex-col gap-(--space-md)">
                <h1 className="text-2xl md:text-4xl font-bold text-neutral-100">
                  {item.title}
                </h1>
                <p className="text-lg text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="flex justify-center opacity-0">
          <Button
            variant="light"
            size="lg"
            icon={<GoArrowRight />}
            iconPosition="right"
            asChild
          >
            <Link href={'/contact'}>Get started</Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}

export default CoreBenefit
