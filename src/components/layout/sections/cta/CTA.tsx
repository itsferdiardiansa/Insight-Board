import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { Card } from '@/components/ui/card'
import { Badge, BadgeProps } from '@/components/ui/badge'
import { cn } from '@/utils/tailwind'
import { ReactNode } from 'react'

export type CTAProps = {
  title: string
  titleClassName?: string
  link: string
  label: string
  linkClassName?: string
  badgeText?: string
  badgeVariant?: BadgeProps['variant']
  badgeSize?: BadgeProps['size']
  badgeClassName?: string
  variant?: 'default' | 'gradient'
  spacing?: 'sm' | 'md'
  className?: string
  action?: ReactNode
  layout?:
    | 'vertical'
    | 'horizontal'
    | 'media-left'
    | 'media-top'
    | 'centered'
    | 'inline'
    | 'minimal'
    | 'icon'
  media?: React.ReactNode
}

export const CTA: React.FC<CTAProps> = ({
  title,
  titleClassName,
  link,
  label,
  linkClassName,
  badgeVariant = 'light',
  badgeSize = 'xs',
  badgeText,
  badgeClassName,
  spacing = 'sm',
  action,
  className,
  layout = 'vertical',
  media,
}) => {
  const isCentered = layout === 'centered'
  const isHorizontal = layout === 'horizontal'
  const isMediaLeft = layout === 'media-left'
  const isMediaTop = layout === 'media-top'
  const isInline = layout === 'inline'
  const isMinimal = layout === 'minimal'
  const isIcon = layout === 'icon'

  return (
    <Card
      roundedSize="md"
      padding={spacing}
      className={cn(
        'bg-blue-200',
        className,
        isCentered && 'text-center items-center',
        isHorizontal && 'flex justify-between items-center',
        isInline && 'flex items-center gap-2',
        isIcon && 'flex items-center gap-3'
      )}
    >
      {isMediaTop && media && <div className="mb-space-sm">{media}</div>}

      <div
        className={cn(
          isMediaLeft && 'flex items-center gap-space-sm',
          !isInline && !isHorizontal && !isMediaLeft && 'space-y-space-sm'
        )}
      >
        {isMediaLeft && media && <div>{media}</div>}

        <div
          className={cn(
            isCentered && 'mx-auto',
            isInline && 'flex items-center gap-space-lg',
            isHorizontal && 'flex flex-col gap-space-sm'
          )}
        >
          {!isMinimal && badgeText && (
            <Badge
              variant={badgeVariant}
              size={badgeSize}
              className={cn(
                'w-auto self-start',
                isInline && 'self-center',
                badgeClassName
              )}
            >
              {badgeText}
            </Badge>
          )}

          <p className={cn('text-2xl font-bold', titleClassName)}>{title}</p>

          {action ? (
            <div className="self-start">{action}</div>
          ) : (
            <Link
              href={link}
              className={cn(
                'hover:underline font-semibold flex items-center',
                linkClassName
              )}
            >
              <span>{label}</span>
              <BiChevronRight className="text-lg mt-1" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
