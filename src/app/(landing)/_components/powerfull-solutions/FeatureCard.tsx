type FeatureCardProps = {
  title: string
  description: string
  number: number
  isCollapsed: boolean
  contentRef?: (el: HTMLDivElement | null) => void
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  number,
  isCollapsed,
  contentRef,
}) => {
  return (
    <div className="flex flex-row gap-4 py-8 border-b border-gray-100 bg-white">
      <div className="flex">
        <p className="text-2xl xl:text-3xl font-black text-neutral-500">
          {number}.
        </p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl xl:text-3xl font-semibold">{title}</h3>

        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{
            height: isCollapsed ? 'auto' : 0,
            opacity: isCollapsed ? 1 : 0,
          }}
        >
          <p className="mt-2 text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
