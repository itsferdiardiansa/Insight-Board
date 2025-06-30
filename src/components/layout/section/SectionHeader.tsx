'use client'

import { useEffect, useRef, forwardRef } from 'react'
import { gsap } from 'gsap'
import { cva, VariantProps } from 'class-variance-authority'
import { Badge, type BadgeProps } from '@/components/ui/badge'
import { cn } from '@/utils/tailwind'

const sectionHeaderVariants = cva('flex flex-col gap-(--space-md)', {
  variants: {
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    responsiveTextAlign: {
      smLeft: 'sm:text-left',
      smCenter: 'sm:text-center',
      smRight: 'sm:text-right',
      mdLeft: 'md:text-left',
      mdCenter: 'md:text-center',
      mdRight: 'md:text-right',
      lgLeft: 'lg:text-left',
      lgCenter: 'lg:text-center',
      lgRight: 'lg:text-right',
      xlLeft: 'xl:text-left',
      xlCenter: 'xl:text-center',
      xlRight: 'xl:text-right',
    },
  },
})

export interface SectionHeaderProps
  extends VariantProps<typeof sectionHeaderVariants> {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  badgeLabel?: string
  badgeVariant?: BadgeProps['variant']
}

const isStringHtml = (content: unknown): content is string => {
  return typeof content === 'string' && /<\/?[a-z][\s\S]*>/i.test(content)
}

export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      title,
      subtitle,
      badgeLabel,
      badgeVariant = 'ghost',
      textAlign,
      responsiveTextAlign,
    },
    ref
  ) => {
    const badgeRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const descRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        if (badgeRef.current) {
          gsap.fromTo(
            badgeRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: badgeRef.current,
                start: 'top 85%',
              },
            }
          )
        }

        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          )
        }

        if (descRef.current) {
          gsap.fromTo(
            descRef.current,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: descRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          )
        }
      })

      return () => ctx.revert()
    }, [])

    return (
      <div
        ref={ref}
        className={cn(
          sectionHeaderVariants({ textAlign, responsiveTextAlign })
        )}
      >
        {badgeLabel && (
          <div ref={badgeRef} className="flex-1 opacity-0">
            <Badge variant={badgeVariant}>{badgeLabel}</Badge>
          </div>
        )}

        <div className="flex flex-col justify-between gap-(--space-sm) md:gap-(--space-lg)">
          <h1 ref={titleRef} className="heading-display opacity-0">
            {typeof title === 'string' && isStringHtml(title) ? (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              title
            )}
          </h1>

          {subtitle && (
            <h2 ref={descRef} className="heading-sub opacity-0">
              {typeof subtitle === 'string' && isStringHtml(subtitle) ? (
                <span dangerouslySetInnerHTML={{ __html: subtitle }} />
              ) : (
                subtitle
              )}
            </h2>
          )}
        </div>
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'
