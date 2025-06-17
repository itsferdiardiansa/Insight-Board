'use client'
import * as React from 'react'
import { SocialProofHeader } from './SocialProofHeader'
import { SocialProofPartners } from './SocialProofPartners'

const SocialProof: React.FC = () => {
  return (
    <div className="content-block">
      <div className="flex flex-col gap-12 lg:gap-28 items-center">
        <div className="flex flex-col gap-4 items-center">
          <SocialProofHeader />
        </div>

        <div>
          <SocialProofPartners />
        </div>
      </div>
    </div>
  )
}

export default SocialProof
