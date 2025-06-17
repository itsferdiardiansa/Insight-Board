import * as React from 'react'
import { AppHeader } from '@/components/layout/app-header'
import { AppFooter } from '@/components/layout/app-footer'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <AppHeader />

      <main className="pt-[78px]">{children}</main>

      <AppFooter />
    </div>
  )
}

export default MainLayout
