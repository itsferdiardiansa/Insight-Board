import { forwardRef } from 'react'
import { FaCheck } from 'react-icons/fa'

interface CollaborationFeatureItemProps {
  title: string
  description: string
}

export const CollaborationFeatureItem = forwardRef<
  HTMLDivElement,
  CollaborationFeatureItemProps
>(({ title, description }, ref) => {
  return (
    <article
      ref={ref}
      className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full"
    >
      <div className="p-2 rounded-full bg-green-700 text-white">
        <FaCheck />
      </div>
      <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
        <h3 className="text-lg font-semibold leading-loose text-neutral-800 max-md:max-w-full">
          {title}
        </h3>
        <p className="text-base text-neutral-500 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  )
})

CollaborationFeatureItem.displayName = 'CollaborationFeatureItem'
