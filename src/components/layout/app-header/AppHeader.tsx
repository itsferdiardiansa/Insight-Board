'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiMenu } from 'react-icons/fi'
import { Navigation } from './navigation'
import { AuthButton } from './AuthButton'
import { BrandLogo } from '@/components/ui/brand-logo'
import Drawer from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { CTAButton } from './CTAButton'

export const AppHeader: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const lastScroll = useRef(0)
  const isVisible = useRef(true)
  const headerHeight = useRef(0)

  useLayoutEffect(() => {
    const header = headerRef.current
    if (!header) return

    const currentY = window.scrollY
    headerHeight.current = header.offsetHeight

    if (currentY > headerHeight.current) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }, [])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

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
      // ref={headerRef}
      className="sticky top-0 inset-x-0 z-[999] transition-all duration-300 bg-white/80 backdrop-blur-sm"
    >
      <div className="layout-wrapper py-space-xs md:py-space-sm z-50">
        <div className="flex justify-between items-center gap-space-md">
          <div className="flex items-center gap-space-4xl">
            <BrandLogo />
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <Navigation />
          </div>

          <Drawer
            open={open}
            title="Main Menu"
            position="bottom"
            duration={500}
            fullScreen
            onClose={() => setOpen(false)}
          >
            <Drawer.Content className="py-0!">
              <Navigation onCloseDrawer={() => setOpen(false)} />
              <AuthButton className="py-space-sm" />
            </Drawer.Content>
          </Drawer>

          <div className="flex gap-space-xs items-center">
            <AuthButton className="hidden lg:block" />
            <CTAButton />

            <div className="lg:hidden">
              <Button
                innerClassName="pr-0!"
                variant="ghost"
                aria-label="Toggle navigation menu"
                onClick={() => setOpen(true)}
              >
                <FiMenu className="font-bold text-2xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
