'use client'

import Lottie from 'lottie-react'
import { GrAnalytics } from 'react-icons/gr'
import { MdAutoAwesome, MdOutlineIntegrationInstructions } from 'react-icons/md'
import { VscServerProcess } from 'react-icons/vsc'
import { TbFolderQuestion } from 'react-icons/tb'
import { SectionShell, SectionHeader } from '@/components/layout/sections'
import features from './feature-showcase-data'
import { cn } from '@/utils/tailwind'

const icons = [
  <GrAnalytics key={1} className="w-6" />,
  <VscServerProcess key={2} className="w-6" />,
  <MdOutlineIntegrationInstructions key={3} className="w-6" />,
  <MdAutoAwesome key={4} className="w-6" />,
]

export const FeatureShowcase: React.FC = () => {
  return (
    <SectionShell direction="col">
      <SectionHeader
        title="The tool you really need for growing"
        subtitle="<span class='text-neutral-800 font-bold'>Effective financial management — </span>  is critical for the success of any business."
        badgeLabel="Why InsightBoard?"
        badgeVariant="secondary"
        badgeIcon={<TbFolderQuestion />}
        textAlign={'center'}
      />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-(--space-xl) items-stretch justify-stretch">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-(--space-lg)'
            )}
          >
            <div
              className={cn(
                'relative w-full aspect-[4/4] rounded-2xl overflow-hidden',
                index === 1 ? 'bg-violet-200' : 'bg-violet-50'
              )}
            >
              <Lottie
                className="w-full h-full"
                animationData={feature.animation}
                loop={true}
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-(--space-sm) text-2xl font-bold text-neutral-800">
                <span className="text-2xl">{icons[index]}</span>

                <h3 className="text-2xl inline">{feature.title}</h3>
              </div>
              <p className="text-lg md:text-xl text-neutral-500 mt-(--space-sm)">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
