import { Badge } from '@/components/ui/badge'
import { cn } from '@/utils/tailwind'
import { spacingTokens } from './spacing-tokens'

export const SpacingList = () => (
  <div className="border border-default rounded-md py-space-md">
    <div className="grid grid-cols-[100px_.5fr_1fr] gap-x-space-4xl items-center px-space-md pb-space-sm border-b border-default font-semibold">
      <div>Token name</div>
      <div>Value</div>
      <div>Description</div>
    </div>
    {spacingTokens.map((token, index) => (
      <div
        key={index}
        className="grid grid-cols-[100px_.5fr_1fr] gap-x-space-4xl items-center last:pb-0 py-space-sm px-space-md last:border-b-0 border-b border-default"
      >
        <Badge
          className="justify-self-start bg-secondary text-default border border-default font-light [&>*]:text-sm! [&>*]:text-default!"
          size="sm"
          rounded="full"
        >
          {`${token.name}`}
        </Badge>

        <div className={cn(token.size, 'h-6 bg-info-intense rounded-sm')} />

        <div>
          <p className="m-0!">{token.description}</p>
        </div>
      </div>
    ))}
  </div>
)
