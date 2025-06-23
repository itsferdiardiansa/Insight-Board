import * as React from 'react'
import Image from 'next/image'

import { FaStar } from 'react-icons/fa'
import UserPixelFox from '@/assets/images/users/userPixelFox.jpg'
import UserNova21 from '@/assets/images/users/userNova21.jpg'
import UserShadow87 from '@/assets/images/users/userShadow87.jpg'

export const Statistics: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="flex">
          <div className="relative flex">
            <div className="w-8 h-8 rounded-full overflow-hidden blur-xs shadow-lg">
              <Image
                className="object-contain"
                src={UserNova21}
                alt="userNova21"
              />
            </div>
            <div className="w-8 h-8 -ml-2 rounded-full overflow-hidden blur-xs shadow-lg">
              <Image
                className="object-contain"
                src={UserPixelFox}
                alt="userPixelFox"
              />
            </div>
            <div className="w-8 h-8 -ml-2 rounded-full overflow-hidden blur-xs shadow-lg">
              <Image
                className="object-contain"
                src={UserShadow87}
                alt="userShadow87"
              />
            </div>
          </div>

          <div className="w-8 h-8 flex items-center justify-center -ml-2 font-bold text-white bg-lime-500 rounded-full z-10">
            +2k
          </div>
        </div>

        <span className="my-auto text-white basis-auto">Joined last month</span>
      </div>
      <div className="flex gap-2 items-stretch text-white">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <FaStar />
            </span>
          ))}
        </div>

        <span className="basis-auto pt-1">5.0 (2k+ reviews)</span>
      </div>
    </div>
  )
}
