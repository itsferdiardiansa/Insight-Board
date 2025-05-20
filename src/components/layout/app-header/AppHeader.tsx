'use client'

import { FiMenu } from 'react-icons/fi'
import { NavigationMenu } from './Navigation'
import { AuthButtons } from './AuthButtons'
import { BrandLogo } from '@/components/ui/brand-logo'

import Drawer from '@/components/ui/drawer'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export const AppHeader = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full mx-auto shadow-sm shadow-gray-100/90 py-4">
      <div className="layout-wrapper flex justify-between items-center gap-4">
        <div>
          <BrandLogo />
        </div>

        <div className="lg:hidden">
          <Button
            className="p-0!"
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
          onClose={() => {
            setOpen(false)
          }}
        >
          <Drawer.Content>
            <div className="flex gap-2 items-center">
              <NavigationMenu showIcon />
            </div>

            <div className="w-full h-1 bg-gray-100 my-4"></div>

            <div>
              <AuthButtons />
            </div>
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
