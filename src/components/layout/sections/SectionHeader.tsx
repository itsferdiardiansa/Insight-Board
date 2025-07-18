'use client'

import { useEffect, useRef, forwardRef } from 'react'
import { gsap } from 'gsap'
import { cva, VariantProps } from 'class-variance-authority'
import { Badge, type BadgeProps } from '@/components/ui/badge'
import { cn } from '@/utils/tailwind'

const sectionHeaderVariants = cva('flex flex-col gap-(--space-md)', {
  variants: {
    textAlign: {
      left: 'text-left items-start',
      center: 'text-center items-center',
      right: 'text-right items-end',
    },
    responsiveTextAlign: {
      smLeft: 'sm:text-left sm:items-start',
      smCenter: 'sm:text-center sm:items-center',
      smRight: 'sm:text-right sm:items-end',
      mdLeft: 'md:text-left md:items-start',
      mdCenter: 'md:text-center md:items-center',
      mdRight: 'md:text-right md:items-end',
      lgLeft: 'lg:text-left lg:items-start',
      lgCenter: 'lg:text-center lg:items-center',
      lgRight: 'lg:text-right lg:items-end',
      xlLeft: 'xl:text-left xl:items-start',
      xlCenter: 'xl:text-center xl:items-center',
      xlRight: 'xl:text-right xl:items-end',
    },
  },
})

export interface SectionHeaderProps
  extends VariantProps<typeof sectionHeaderVariants> {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  badgeLabel?: string
  badgeVariant?: BadgeProps['variant']
  badgeSize?: BadgeProps['size']
  badgeRounded?: BadgeProps['rounded']
  badgeClassName?: BadgeProps['className']
  badgeIcon?: React.ReactNode
  className?: string
  titleClassName?: string
  subTitleClassName?: string
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
      badgeVariant = 'secondary',
      badgeSize = 'md',
      badgeRounded = 'full',
      badgeClassName,
      badgeIcon,
      textAlign,
      responsiveTextAlign,
      className,
      titleClassName,
      subTitleClassName,
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
          sectionHeaderVariants({ textAlign, responsiveTextAlign }),
          className
        )}
      >
        {badgeLabel && (
          <div ref={badgeRef} className="inline-flex opacity-0">
            <Badge
              icon={badgeIcon}
              variant={badgeVariant}
              size={badgeSize}
              rounded={badgeRounded}
              className={badgeClassName}
            >
              {badgeLabel}
            </Badge>
          </div>
        )}

        <div className="inline-flex flex flex-col justify-between gap-(--space-sm) md:gap-(--space-md)">
          <h1
            ref={titleRef}
            className={cn('heading-display opacity-0', titleClassName)}
          >
            {typeof title === 'string' && isStringHtml(title) ? (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              title
            )}
          </h1>

          {subtitle && (
            <h2
              ref={descRef}
              className={cn('heading-sub opacity-0', subTitleClassName)}
            >
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
