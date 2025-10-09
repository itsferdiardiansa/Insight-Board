'use client'

import Link from 'next/link'
import { MouseEvent } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import * as Portal from '@radix-ui/react-portal'
import { cn } from '@/utils/tailwind'
import { usePathname } from 'next/navigation'
import { MegaMenu } from './MegaMenu'
import type { MenuItem } from '../header-nav-links'

type NavigationItemProps = {
  index: number
  item: MenuItem
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  triggerRef: React.RefObject<(HTMLDivElement | null)[]>
  menuRef: React.RefObject<(HTMLDivElement | null)[]>
  menuTop: number | null
  menuLeft: number | null
  isDesktop: boolean
  onCloseDrawer?: () => void
  onMenuItemClick?: (index: number, hasMegaMenu: boolean) => void
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  index,
  item,
  hoveredIndex,
  setHoveredIndex,
  triggerRef,
  menuRef,
  menuTop,
  menuLeft,
  isDesktop,
  onCloseDrawer = () => {},
  onMenuItemClick = () => {},
}) => {
  const path = usePathname()
  const isActive = path === item.link
  const hasMegaMenu = Boolean(item.items?.length)
  const isMegaMenuOpen = hoveredIndex === index

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (hasMegaMenu) {
      e.preventDefault()
      onMenuItemClick(index, true)
      return
    }
    onCloseDrawer()
  }

  const handleMouseEnter = () => {
    if (isDesktop) setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    if (isDesktop) setHoveredIndex(null)
  }

  return (
    <div
      ref={el => {
        triggerRef.current[index] = el
      }}
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.link || '#'}
        onClick={handleClick}
        className={cn(
          'w-full max-lg:px-0 p-space-sm flex justify-between lg:justify-center items-center duration-300',
          'max-lg:border-b max-lg:border-default',
          'text-body-md md:text-body-lg font-semibold!',
          isActive ? 'pointer-events-none' : 'cursor-pointer',
          isActive ? 'text-primary' : 'hover:text-primary'
        )}
      >
        <span className="block">{item.title}</span>
        {hasMegaMenu && (
          <BiChevronDown
            className={cn(
              'text-2xl max-lg:rotate-[270deg] transition-rotate duration-300 ease-in-out',
              isMegaMenuOpen && 'rotate-[180deg]'
            )}
          />
        )}
      </Link>

      {hasMegaMenu && isMegaMenuOpen && (
        <Portal.Root
          className={cn(
            'fixed w-auto z-[9998]',
            menuTop && menuLeft ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            top: `${menuTop ?? 0}px`,
            left: `${menuLeft ?? 0}px`,
          }}
        >
          <MegaMenu
            index={index}
            item={item}
            triggerRef={triggerRef}
            menuRef={menuRef}
            setHoveredIndex={setHoveredIndex}
            onCloseDrawer={onCloseDrawer}
          />
        </Portal.Root>
      )}
    </div>
  )
}
