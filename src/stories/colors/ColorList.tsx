import React, { Fragment } from 'react'
import { SectionShell } from '@/components/layout/sections'
import { ColorBox } from './ColorBox'
import type { Tokens, TokenItem, TokenKeys } from './color-tokens'

type ColorListProps = {
  tokenGroup: TokenKeys[]
  tokens: Tokens
  prefix: string
}

export const ColorList = ({ prefix, tokenGroup, tokens }: ColorListProps) => (
  <SectionShell direction="col">
    <div className="space-y-space-md">
      {tokenGroup.map(group => (
        <div key={group}>
          <h3
            id={`${prefix}-${group}`}
            className="text-xl font-semibold capitalize mb-space-md"
          >
            {group}
          </h3>

          <div className="flex flex-col">
            {Array.isArray(tokens[group]) ? (
              <ColorBox tokens={tokens[group]} />
            ) : (
              tokens[group] &&
              Object.keys(tokens[group]).map((subToken, subTokenIndex) => (
                <div key={subTokenIndex}>
                  <div className="flex flex-col">
                    <ColorBox
                      tokens={
                        (tokens[group] as Record<string, TokenItem[]>)[subToken]
                      }
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
)
