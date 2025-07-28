import { forwardRef } from 'react'
import { FaCheck } from 'react-icons/fa'

type CollaborationFeatureItemProps = {
  title: string
}

export const CollaborationFeatureItem = forwardRef<
  HTMLDivElement,
  CollaborationFeatureItemProps
>(({ title }, ref) => {
  return (
    <div
      ref={ref}
      className="inline-flex gap-(--space-xs) md:gap-(--space-sm) items-center px-(--space-sm) py-(--space-xs) bg-white rounded-full opacity-0"
    >
      <div className="p-1 rounded-full bg-violet-500 text-white">
        <FaCheck className="max-sm:text-xs" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm sm:text-lg font-semibold leading-loose text-neutral-800 max-md:max-w-full">
          {title}
        </h3>
      </div>
    </div>
  )
})

CollaborationFeatureItem.displayName = 'CollaborationFeatureItem'
