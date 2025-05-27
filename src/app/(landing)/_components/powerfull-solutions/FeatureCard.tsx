import { cn } from '@/utils/tailwind'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  backgroundColor: string
  title: string
  description: string
  icon: ReactNode
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  backgroundColor,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col gap-4 items-center lg:items-start">
      <div
        className={cn(
          'h-[42px] w-[42px] p-2 flex items-center justify-center rounded-lg',
          backgroundColor
        )}
      >
        {icon}
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
        <p className="text-base text-neutral-500">{description}</p>
      </div>
    </article>
  )
}
