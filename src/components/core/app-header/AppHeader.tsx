'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiMenu } from 'react-icons/fi'
import { NavigationMenu } from './Navigation'
import { AuthButtons } from './AuthButtons'
import { BrandLogo } from '@/components/ui/brand-logo'
import Drawer from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'

export const AppHeader = () => {
  const [open, setOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const lastScroll = useRef(0)
  const isVisible = useRef(true)
  const headerHeight = useRef(0)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    headerHeight.current = header.offsetHeight

    const showHeader = () => {
      if (!isVisible.current) {
        gsap.to(header, { y: 0, duration: 0.3, ease: 'power3.out' })
        isVisible.current = true
      }
    }

    const hideHeader = () => {
      if (isVisible.current) {
        gsap.to(header, {
          y: -headerHeight.current,
          duration: 0.3,
          ease: 'power3.inOut',
        })
        isVisible.current = false
      }
    }

    const handleScroll = () => {
      const current = window.scrollY

      if (current > headerHeight.current) {
        if (!isFixed) setIsFixed(true)

        if (current < lastScroll.current) {
          showHeader()
        } else {
          hideHeader()
        }
      } else {
        if (isFixed) setIsFixed(false)
        gsap.to(header, { y: 0, duration: 0.2, ease: 'power2.out' })
        isVisible.current = true
      }

      lastScroll.current = current
    }

    const onScroll = () => requestAnimationFrame(handleScroll)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isFixed])

  return (
    <header
      ref={headerRef}
      className={cn(
        'w-full shadow-sm shadow-gray-100/90 py-4 z-[999] bg-white transition-all duration-300',
        'fixed top-0 left-0 right-0'
        // { 'bg-violet-300': !isFixed }
      )}
    >
      <div className="layout-wrapper flex justify-between items-center gap-4">
        <div>
          <BrandLogo />
        </div>

        <div className="lg:hidden">
          <Button
            className="pr-0!"
            variant="ghost"
            pill
            onClick={() => setOpen(true)}
          >
            <FiMenu className="font-bold text-2xl" />
          </Button>
        </div>

        <Drawer
          open={open}
          title="Main Menu"
          position="bottom"
          duration={500}
          fullScreen
          onClose={() => setOpen(false)}
        >
          <Drawer.Content>
            <NavigationMenu onCloseDrawer={() => setOpen(false)} showIcon />
            <div className="w-full h-1 bg-gray-100 my-4" />
            <AuthButtons />
          </Drawer.Content>
        </Drawer>

        <div className="hidden lg:flex gap-4 items-center">
          <NavigationMenu />
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}
