'use client'

import { forwardRef, type PropsWithChildren } from 'react'
import Image, { StaticImageData } from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/tailwind'

const cardVariants = cva('', {
  variants: {
    roundedSize: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-2xl',
      xl: 'rounded-4xl',
    },
    shadow: {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
    border: {
      none: 'border-none',
      full: 'border border-gray-200',
      thumbOnly: 'border border-gray-200',
    },
    padding: {
      sm: 'p-(--space-sm)',
      md: 'p-(--space-md)',
      lg: 'p-(--space-2xl)',
      xl: 'p-(--space-4xl)',
    },
  },
  defaultVariants: {},
})

type CardComponent = React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
> & {
  Content: typeof CardContent
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string
  description?: string
  thumbnail?: StaticImageData
  aspectRatio?: string
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      roundedSize,
      shadow,
      border,
      padding = 'md',
      title,
      description,
      thumbnail,
      aspectRatio = 'aspect-[16/9]',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden bg-white',
          cardVariants({ roundedSize }),
          border !== 'thumbOnly' && cardVariants({ shadow, border }),
          !thumbnail && padding && cardVariants({ padding }),
          className
        )}
        {...props}
      >
        {thumbnail && (
          <div
            className={cn(
              aspectRatio,
              'relative w-full overflow-hidden',
              border === 'thumbOnly' && cardVariants({ roundedSize })
            )}
          >
            <Image
              src={thumbnail}
              className="w-full h-full absolute inset-0 m-auto object-cover"
              alt="img"
              // fill
            />
          </div>
        )}

        <div
          className={cn(
            'transition-all',
            thumbnail && cardVariants({ padding })
          )}
        >
          {children ? (
            children
          ) : (
            <>
              {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
              {description && (
                <p className="text-gray-600 text-base">{description}</p>
              )}
            </>
          )}
        </div>
      </div>
    )
  }
) as CardComponent

const CardContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="relative">{children}</div>
}

Card.displayName = 'Card'
CardContent.displayName = 'CardContent'
Card.Content = CardContent
