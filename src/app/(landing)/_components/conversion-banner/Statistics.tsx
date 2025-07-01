import Image from 'next/image'

import { FaStar } from 'react-icons/fa'
import UserMembers from '@/assets/images/user-members.png'

export const Statistics: React.FC = () => {
  return (
    <div className="flex flex-col gap-(--space-xs)">
      <div className="flex gap-(--space-sm)">
        <div className="flex">
          <div className="relative flex">
            <div className="w-auto h-10">
              <Image
                className="w-full h-full object-cover"
                src={UserMembers}
                alt="userNova21"
              />
            </div>
          </div>

          <div className="w-8 h-8 flex items-center justify-center mt-1 -ml-4 font-bold text-white bg-lime-500 rounded-full z-10">
            +2k
          </div>
        </div>

        <span className="my-auto text-white basis-auto">Joined last month</span>
      </div>
      <div className="flex gap-(--space-sm) text-white">
        <div className="flex items-center gap-(--space-xs)">
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
