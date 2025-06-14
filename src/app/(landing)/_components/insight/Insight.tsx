'use client'
import * as React from 'react'
import { InsightHeader } from './InsightHeader'
import { InsightStats } from './InsightStats'
import { InsightImage } from './InsightImage'

const Insight: React.FC = () => {
  return (
    <div className="content-block flex flex-wrap gap-12 lg:gap-32 items-center">
      <div className="flex-1 grow shrink self-stretch my-auto">
        <div className="flex flex-col w-full max-w-[438px] max-md:max-w-full">
          <InsightHeader />
        </div>
        <InsightStats />
      </div>

      <div className="flex-1 max-lg:hidden">
        <InsightImage />
      </div>
    </div>
  )
}

export default Insight
