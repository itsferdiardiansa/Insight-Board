import { forwardRef, Fragment, type PropsWithChildren } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'
import { Badge, BadgeProps } from '../badge'
import { cn } from '@/utils/tailwind'
import { extractSlots } from '@/utils/slots'

export const textHeadingSizeMap = {
  md: 'text-heading-base',
  lg: 'text-heading-lg',
  xl: 'text-heading-xl',
  '2xl': 'text-heading-2xl',
  '3xl': 'text-heading-3xl',
  '4xl': 'text-heading-4xl',
}

export const textSizeMap = {
  sm: 'text-body-sm',
  md: 'text-body-md',
  lg: 'text-body-lg',
}

type TextHeadingSizeMap = typeof textHeadingSizeMap
type TextSizeMap = typeof textSizeMap
type TextHeadingSizeKeys = keyof TextHeadingSizeMap
type TextSizeKeys = keyof TextSizeMap

const cardVariants = cva('', {
  variants: {
    roundedSize: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-2xl',
      xl: 'rounded-4xl',
    },
    titleSize: textHeadingSizeMap,
    descriptionSize: textSizeMap,
    footerActionSize: textSizeMap,
    paddingAxis: {
      all: 'axis-all',
      y: 'axis-y',
    },
    padding: {
      sm: null,
      md: null,
      lg: null,
      xl: null,
    },
  },
  compoundVariants: [
    // sm
    // { padding: 'sm', paddingAxis: 'all', class: 'p-space-sm' },
    // { padding: 'sm', paddingAxis: 'y', class: 'py-space-sm' },

    // md
    { padding: 'md', paddingAxis: 'all', class: 'p-space-md' },
    { padding: 'md', paddingAxis: 'y', class: 'py-space-md' },

    // lg
    { padding: 'lg', paddingAxis: 'all', class: 'p-space-lg' },
    { padding: 'lg', paddingAxis: 'y', class: 'py-space-lg' },

    // xl
    { padding: 'xl', paddingAxis: 'all', class: 'p-space-xl' },
    { padding: 'xl', paddingAxis: 'y', class: 'py-space-xl' },

    // {
    //   footerActionSize: 'sm',
    //   className: 'h-[1rem] group-hover:-translate-y-5',
    // },
    {
      footerActionSize: ['sm'],
      className: 'h-[1rem] group-hover:-translate-y-4',
    },
    {
      footerActionSize: ['md'],
      className: 'h-[1.7rem] group-hover:-translate-y-6',
    },
    {
      footerActionSize: ['lg'],
      className: 'h-[1.7rem] group-hover:-translate-y-7',
    },
    // {
    //   footerActionSize: '4xl',
    //   className: 'h-[2rem] group-hover:-translate-y-9',
    // },
  ],
})

type TextSizes = 'description' | 'footerAction'
type ExcludeVariants =
  | 'titleSize'
  | 'descriptionSize'
  | 'footerActionSize'
  | 'paddingAxis'
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof cardVariants>, ExcludeVariants> {
  title?: string
  description?: string
  thumbnail?: StaticImageData
  thumbnailMeta?: string
  thumbnailSize?: Pick<StaticImageData, 'width' | 'height'>
  link?: string
  footerActionLabel?: string
  metaItems?: string[]
  badge?: Pick<BadgeProps, 'size' | 'variant'> & {
    label: string
  }
  textSize?: Partial<{
    [key in TextSizes]: TextSizeKeys
  }> & {
    title: TextHeadingSizeKeys
  }
}

export const CardComponent = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      roundedSize = 'md',
      padding = 'md',
      title,
      textSize,
      description,
      thumbnail,
      thumbnailMeta,
      thumbnailSize,
      badge,
      link,
      metaItems,
      footerActionLabel,
      children,
      ...props
    },
    ref
  ) => {
    const { slots } = extractSlots(children, {
      Content: CardContentSlot,
      Thumbnail: CardThumbnailSlot as React.FC,
    })
    const hasMetaItems = Boolean(metaItems?.length)
    const hasThumbnail = Boolean(slots.Thumbnail || thumbnail)
    const {
      title: titleSize = 'lg',
      footerAction: footerActionSize = 'md',
      description: descriptionSize = 'md',
    } = textSize ?? {}

    return (
      <div
        ref={ref}
        className={cn(
          'group w-full relative overflow-hidden',
          cardVariants({ roundedSize }),
          !hasThumbnail &&
            padding &&
            cardVariants({ padding, paddingAxis: 'all' }),
          className
        )}
        {...props}
      >
        {link && <Link href={link} className="absolute inset-0" />}

        {slots.Thumbnail
          ? slots.Thumbnail
          : thumbnail && (
              <CardThumbnailSlot
                src={thumbnail}
                alt={thumbnailMeta as string}
                roundedSize={roundedSize}
                {...thumbnailSize}
              />
            )}

        {slots.Content ? (
          slots.Content
        ) : (
          <div
            className={cn(
              'h-full transition-all space-y-gap-md pointer-events-none',
              hasThumbnail && cardVariants({ padding, paddingAxis: 'y' })
            )}
          >
            <div className="space-y-gap-md">
              {badge?.label && (
                <Badge
                  size={badge.size}
                  variant={badge.variant ?? 'ghost'}
                  className="p-0! text-primary!"
                >
                  {badge.label}
                </Badge>
              )}

              {(title || description) && (
                <div className="space-y-gap-xs">
                  {title && (
                    <h1 className={cn(cardVariants({ titleSize }), 'clamp-2')}>
                      {title}
                    </h1>
                  )}

                  {description && (
                    <p
                      className={cn(
                        cardVariants({ descriptionSize }),
                        'text-subtle clamp-3'
                      )}
                    >
                      {description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {(hasMetaItems || footerActionLabel) && (
              <div className="overflow-hidden">
                <div
                  className={cn(
                    hasMetaItems &&
                      footerActionLabel &&
                      'transition-translate duration-300 ease-in-out',
                    cardVariants({ footerActionSize })
                  )}
                >
                  {hasMetaItems && (
                    <div className="flex gap-space-sm text-subtlest">
                      {metaItems?.map((item, index) => (
                        <Fragment key={index}>
                          <p>{item}</p>
                          {index !== metaItems.length - 1 && <span>|</span>}
                        </Fragment>
                      ))}
                    </div>
                  )}

                  {footerActionLabel && (
                    <div className="relative">
                      <p className="text-primary">{footerActionLabel}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)

export const CardContentSlot: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="relative">{children}</div>
}

type CardThumbnailSlotProps = Pick<CardProps, 'roundedSize'> & {
  src: StaticImageData
  alt: string
  width?: StaticImageData['width']
  height?: StaticImageData['height']
}

export const CardThumbnailSlot: React.FC<CardThumbnailSlotProps> = ({
  roundedSize,
  ...imageProps
}) => (
  <div
    className={cn(
      'relative w-full aspect-[16/9] overflow-hidden pointer-events-none',
      cardVariants({ roundedSize })
    )}
  >
    {/* eslint-disable-next-line */}
    <Image
      className="w-full h-full absolute inset-0 m-auto object-cover"
      {...imageProps}
    />
  </div>
)

CardComponent.displayName = 'CardComponent'
