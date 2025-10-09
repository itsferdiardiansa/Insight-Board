import { Card } from '@/components/ui/card'
import { Badge, BadgeProps } from '@/components/ui/badge'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { cn } from '@/utils/tailwind'

export type HighlightCardProps = {
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
  className?: string
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  titleClassName,
  link,
  label,
  linkClassName,
  badgeVariant,
  badgeText,
  badgeSize,
  badgeClassName,
  className,
}) => {
  return (
    <Card roundedSize="md" padding="md" className={className}>
      <Card.Content>
        <div className="h-full flex flex-col justify-center gap-space-sm">
          <div className="space-y-gap-sm">
            <Badge
              variant={badgeVariant}
              size={badgeSize}
              rounded="sm"
              className={cn('w-auto self-start', badgeClassName)}
            >
              {badgeText}
            </Badge>

            <h1 className={cn('text-xl font-bold', titleClassName)}>{title}</h1>
          </div>

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
        </div>
      </Card.Content>
    </Card>
  )
}
