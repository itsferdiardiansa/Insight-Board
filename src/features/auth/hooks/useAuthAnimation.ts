import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAuthAnimation({
  headingRef,
  subRef,
  illustrationRef,
  iconRefs,
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>
  subRef: React.RefObject<HTMLParagraphElement | null>
  illustrationRef: React.RefObject<HTMLDivElement | null>
  iconRefs: React.RefObject<HTMLDivElement[]>
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
          },
        }
      )

      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: subRef.current,
            start: 'top 90%',
          },
        }
      )

      // Animate Illustration
      gsap.fromTo(
        illustrationRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4,
        }
      )

      iconRefs.current.forEach((icon, index) => {
        const randomX = gsap.utils.random(-20, 20)
        const randomY = gsap.utils.random(-20, 20)

        gsap.fromTo(
          icon,
          { opacity: 0, x: randomX, y: randomY, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay: 0.6 + index * 0.15,
            duration: 0.6,
            ease: 'power3.out',
            onComplete: () => {
              gsap.to(icon, {
                y: '+=10',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              })
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [headingRef, iconRefs, illustrationRef, subRef])
}
