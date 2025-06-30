'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SocialProofPartners } from './SocialProofPartners'
import { SectionShell } from '@/components/layout/section'

const SocialProof: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    )
  })
  return (
    <SectionShell direction={'col'} responsiveDirection={'mdRow'}>
      <div className="basis-[30%] shrink-0">
        <h3
          ref={titleRef}
          className="text-2xl font-semibold max-md:text-center text-neutral-500 opacity-0"
        >
          Trusted by industry leaders
        </h3>
      </div>

      <SocialProofPartners />
    </SectionShell>
  )
}

export default SocialProof
