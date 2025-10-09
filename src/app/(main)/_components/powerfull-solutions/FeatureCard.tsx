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
    <div className="flex flex-row gap-space-md py-space-md border-b border-default bg-defult">
      <div className="flex">
        <p className="text-heading-xl text-subtle">{number}.</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-heading-xl">{title}</h3>

        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{
            height: isCollapsed ? 'auto' : 0,
            opacity: isCollapsed ? 1 : 0,
          }}
        >
          <p className="mt-space-xs text-body-md md:text-body-lg text-subtle">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
