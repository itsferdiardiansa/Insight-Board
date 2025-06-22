'use client'
import * as React from 'react'
import { SocialProofPartners } from './SocialProofPartners'

const SocialProof: React.FC = () => {
  return (
    <div className="content-block">
      <div className="flex flex-col gap-12 lg:gap-24 items-center">
        <div>
          <SocialProofPartners />
        </div>
      </div>
    </div>
  )
}

export default SocialProof
