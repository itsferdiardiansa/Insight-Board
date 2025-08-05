import React from 'react'
import type { Meta } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

export default {
  title: 'Design Tokens/Spacing',
  parameters: {
    options: {
      bottomPanelHeight: 0,
    },
  },
} satisfies Meta

const SPACING_TOKENS = [
  { size: 'xs', rem: 0.25 * 1 },
  { size: 'sm', rem: 0.25 * 3 },
  { size: 'md', rem: 0.25 * 5 },
  { size: 'lg', rem: 0.25 * 7 },
  { size: 'xl', rem: 0.25 * 9 },
  { size: '2xl', rem: 0.25 * 11 },
  { size: '3xl', rem: 0.25 * 13 },
  { size: '4xl', rem: 0.25 * 15 },
]

export const SpacingPreview = () => {
  return (
    <div className="min-w-2xl space-y-(--space-4xl) p-6">
      <div>
        <h1 className="text-5xl font-bold">Spacings</h1>
        <p className="mt-2 text-gray-600 max-w-prose">
          The spacing tokens below are defined in your design system using
          custom properties like
          <code className="px-1 py-0.5 bg-gray-100 rounded text-sm font-mono">
            --space-md
          </code>
          . These values help maintain consistent layout spacing across the app.
        </p>
      </div>

      {SPACING_TOKENS.map((token, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_1fr_100px] gap-(--space-4xl) items-center pb-(--space-md) border-b border-gray-100"
        >
          <div
            style={{
              width: '100px',
              height: `var(--space-${token.size})`,
              background: 'oklch(49.1% 0.27 292.581)',
            }}
          />
          <div className="text-sm font-mono">
            <Badge className="bg-violet-100 text-violet-800" size="sm">
              {`--space-${token.size}`}
            </Badge>
          </div>

          <div>
            <p>{token.rem}rem</p>
          </div>
        </div>
      ))}
    </div>
  )
}
