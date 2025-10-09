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
      className="inline-flex gap-space-xs md:gap-space-sm items-center px-space-sm py-space-xs bg-default rounded-full opacity-0"
    >
      <div className="p-1 rounded-full bg-primary-intense text-inverse">
        <FaCheck className="text-xs" />
      </div>
      <div className="flex-1">
        <h3 className="max-md:max-w-full text-body-sm md:text-body-md font-semibold leading-loose">
          {title}
        </h3>
      </div>
    </div>
  )
})

CollaborationFeatureItem.displayName = 'CollaborationFeatureItem'
