import * as React from 'react'
import { AppHeader } from '@/components/core/app-header'
import { AppFooter } from '@/components/core/app-footer'
import './landing.css'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />

      <main className="main-app">{children}</main>

      <AppFooter />
    </>
  )
}

export default MainLayout
