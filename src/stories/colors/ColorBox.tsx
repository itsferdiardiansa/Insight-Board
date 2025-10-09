import { cn } from '@/utils/tailwind'
import { TokenItem } from './color-tokens'

type ColorTableProps = {
  tokens: TokenItem[]
}

export const ColorBox: React.FC<ColorTableProps> = ({ tokens }) => (
  <div className="mb-space-lg!">
    <div className="grid grid-cols-[1fr_100px] items-center border-b border-default font-semibold">
      <div className="flex">
        <p className="m-0!">Token and description</p>
      </div>

      <div className="justify-self-center">
        <p>Palette</p>
      </div>
    </div>

    <div className="space-y-gap-md">
      {tokens.map((token, tokenIndex) => (
        <div
          key={tokenIndex}
          className="grid grid-cols-[1fr_100px] py-space-sm"
        >
          <div className="flex flex-col gap-space-sm">
            <p className="m-0! self-start bg-secondary text-default text-xs! font-semibold py-space-xs px-space-sm rounded-md">
              {token.name}
            </p>
            <p className="m-0! text-default">{token.description}</p>
          </div>

          <div className="justify-self-center flex flex-col justify-center gap-space-sm p-[8px] rounded-md shadow shadow-sm">
            <div className={cn('w-24 h-6 rounded-md', token.palette)}></div>
            <p className="m-0! font-mono! text-center text-xs!">
              {token.palette.split('-').slice(1).join('')}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
