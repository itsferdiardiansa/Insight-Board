import Link from 'next/link'
import { ElementType } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { SubMenuItem } from '../header-nav-links'

interface Props {
  col: SubMenuItem
  onCloseDrawer?: () => void
}

export const MegaMenuColumn = ({ col, onCloseDrawer }: Props) => {
  const Icon = col.icon as ElementType | undefined

  return (
    <div className="flex-1 nth-3:w-full nth-3:flex-auto flex flex-col gap-(--space-xs)">
      <h4 className="flex items-center gap-(--space-xs) font-bold text-neutral-800 p-2 border-b border-gray-100">
        {Icon && <Icon className="text-lg text-(--primary)" />}
        {col.title}
      </h4>

      {col.items && (
        <ul className="space-y-1">
          {col.items.map((subItem, i) => (
            <li key={i}>
              <Link
                href={subItem.link}
                onClick={onCloseDrawer}
                className="block px-2 py-1 hover:bg-violet-100 transition-all duration-300 ease-in-out rounded-md group"
              >
                <div className="flex items-center text-neutral-800 font-semibold">
                  <span>{subItem.title}</span>
                  <span className="text-xl transform transition-transform group-hover:translate-x-[2px]">
                    <BiChevronRight />
                  </span>
                </div>

                {subItem.subtitle && (
                  <div className="text-neutral-600">{subItem.subtitle}</div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
