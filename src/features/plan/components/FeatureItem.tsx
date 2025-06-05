import * as React from 'react'
import { FaCheck } from 'react-icons/fa'

interface FeatureItemProps {
  text: string
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex gap-6 items-center w-full">
      <FaCheck className="text-violet-800" />
      <p className="self-stretch my-auto text-neutral-500">{text}</p>
    </div>
  )
}
