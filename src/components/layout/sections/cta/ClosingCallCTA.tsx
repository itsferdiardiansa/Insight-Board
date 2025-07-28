'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

import { MdDataUsage } from 'react-icons/md'
import { GoPackage } from 'react-icons/go'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { SectionShell } from '@/components/layout/sections'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import WeeklyActivityIllustration from '@/assets/illustrations/weekly-activity.png'
import MonthlyRevenueIllustration from '@/assets/illustrations/monthly-revenue.png'

const keyBenefits = [
  {
    icon: <MdDataUsage />,
    title: 'Low Resource Usage',
    desc: 'Lightweight and efficient, runs in the background without impacting performance.',
  },
  {
    icon: <RiSecurePaymentLine />,
    title: 'Security Data',
    desc: 'Community-driven and transparent, evolves with user contributions and feedback.',
  },
  {
    icon: <GoPackage />,
    title: 'Intuitive experience',
    desc: 'Simple to set up, easy to use, and designed for seamless monitoring.',
  },
]

export const ClosingCallCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        descRef.current,
        { y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        btnsRef.current,
        { y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: btnsRef.current,
            start: 'top 85%',
          },
        }
      )

      gsap.fromTo(
        featuresRef.current,
        { y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current[0],
            start: 'top 85%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <SectionShell direction="col" ref={containerRef}>
      <Card className="bg-(--secondary)" padding="lg" roundedSize="lg">
        <div className="flex flex-col items-center max-lg:items-center">
          <div className="text-center">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-neutral-100 opacity-0"
            >
              Supercharge your performance with
              <br className="max-md:hidden" />
              the tools you already love.
            </h1>

            <p
              ref={descRef}
              className="mt-(--space-sm) text-base md:text-lg leading-7 text-neutral-200 opacity-0"
            >
              Join 13,000+ teams who rely on InsightBoard to stay ahead,
              automate insights, and fuel their strategy.
            </p>
          </div>

          <div
            ref={btnsRef}
            className="flex flex-col md:flex-row gap-(--space-md) mt-(--space-xl) opacity-0"
          >
            <Button variant="light" asChild>
              <Link href="sign-in">Get 14 Days Free Trial</Link>
            </Button>
          </div>
        </div>

        <div className="w-full absolute inset-0 pointer-events-none">
          <Image
            className="w-2/8 absolute top-20 -left-40 -rotate-25"
            src={WeeklyActivityIllustration}
            alt="Monthly revenue"
          />

          <Image
            className="w-2/8 absolute bottom-2 -right-30 rotate-25"
            src={MonthlyRevenueIllustration}
            alt="Monthly revenue"
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-(--space-md)">
        {keyBenefits.map((item, i) => (
          <div
            key={i}
            ref={el => {
              featuresRef.current[i] = el
            }}
            className="border-l border-gray-300 pl-(--space-xl) opacity-0"
          >
            <div className="flex items-center gap-(--space-sm) text-xl">
              {item.icon}
              <h2 className="text-neutral-800 font-bold">{item.title}</h2>
            </div>

            <div className="mt-(--space-sm)">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
