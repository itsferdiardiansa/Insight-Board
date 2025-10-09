'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { NavigationItem } from './NavigationItem'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import Drawer from '@/components/ui/drawer'
import { MegaMenu } from './MegaMenu'
import { menuItems } from '../header-nav-links'

export const Navigation = ({ onCloseDrawer = () => {} }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [menuLeft, setMenuLeft] = useState<number | null>(null)
  const [menuTop, setMenuTop] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([])
  const menuRefs = useRef<(HTMLDivElement | null)[]>([])
  const isLgUp = useBreakpoint('lg')
  const [currMenuIndex, setCurrMenuIndex] = useState<number>(-1)
  const [isSubMenuOpen, setSubMenuOpen] = useState<boolean>(false)

  const handleSubMenuOpen = (index: number, hasSubMenu: boolean) => {
    if (!hasSubMenu) return
    setSubMenuOpen(true)
    setCurrMenuIndex(index)
  }

  useLayoutEffect(() => {
    if (hoveredIndex === null) return

    const id = requestAnimationFrame(() => {
      const trigger = triggerRefs.current[hoveredIndex]
      const menu = menuRefs.current[hoveredIndex]
      if (!trigger || !menu) return

      const triggerRect = trigger.getBoundingClientRect()
      const menuRect = menu.getBoundingClientRect()

      const newLeft =
        triggerRect.left + triggerRect.width / 2 - menuRect.width / 2
      const newTop = triggerRect.top + triggerRect.height

      setMenuTop(newTop)
      setMenuLeft(newLeft)
    })

    return () => cancelAnimationFrame(id)
  }, [hoveredIndex])

  return (
    <nav className="relative flex flex-col lg:flex-row lg:gap-space-md z-50">
      {menuItems.map((item, index) => (
        <NavigationItem
          key={index}
          index={index}
          item={item}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          isDesktop={isLgUp}
          triggerRef={triggerRefs}
          menuRef={menuRefs}
          menuTop={menuTop}
          menuLeft={menuLeft}
          onCloseDrawer={onCloseDrawer}
          onMenuItemClick={handleSubMenuOpen}
        />
      ))}

      {!isLgUp && (
        <Drawer
          open={isSubMenuOpen}
          title={menuItems[currMenuIndex]?.title}
          position="right"
          fullScreen
          onClose={() => setSubMenuOpen(false)}
          closeIcon={<FaArrowLeft />}
        >
          <Drawer.Content>
            <MegaMenu
              index={currMenuIndex}
              item={menuItems[currMenuIndex]}
              triggerRef={triggerRefs}
              menuRef={menuRefs}
              setHoveredIndex={() => {}}
            />
          </Drawer.Content>
        </Drawer>
      )}
    </nav>
  )
}
