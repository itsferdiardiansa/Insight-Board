'use client'

import { Fragment } from 'react'
import { MegaMenuColumn } from './MegaMenuColumn'
import { MenuItem } from '../header-nav-links'
import { cn } from '@/utils/tailwind'

type MegaMenuProps = {
  index: number
  item: MenuItem
  triggerRef: React.RefObject<(HTMLDivElement | null)[]>
  menuRef: React.RefObject<(HTMLDivElement | null)[]>
  setHoveredIndex: (index: number | null) => void
  onCloseDrawer?: () => void
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  index,
  item,
  triggerRef,
  menuRef,
  setHoveredIndex,
  onCloseDrawer,
}) => {
  const ContentHighlight = item.contentHighlight

  return (
    <Fragment>
      <div
        className="w-full h-full lg:h-[calc(100%+120px)] absolute top-auto bottom-0 inset-x-0 mx-auto pointer-events-auto z-[-1]"
        style={{ width: `${triggerRef.current[index]?.offsetWidth || 0}px` }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      />

      <div
        ref={el => {
          menuRef.current[index] = el
        }}
        className={cn(
          'relative bg-white lg:mt-5 lg:z-10 lg:rounded-xl lg:shadow-md lg:shadow-gray-100/50 transition-all duration-300 animate-fade-in-up opacity-100 translate-y-0'
        )}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className="flex flex-wrap lg:grid gap-space-sm lg:p-space-sm"
          style={{
            gridTemplateColumns: `repeat(${item.items?.length ?? 0}, 1fr) 280px`,
          }}
        >
          {item.items?.map((col, colIndex) => (
            <MegaMenuColumn
              key={colIndex}
              col={col}
              onCloseDrawer={onCloseDrawer}
            />
          ))}

          <div className="w-full block lg:flex lg:items-stretch mac-lg:border-t max-lg:border-gray-100 max-lg:pt-space-sm">
            {ContentHighlight && <ContentHighlight />}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
