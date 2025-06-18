import * as React from 'react'
import { AppHeader } from '@/components/core/app-header'
import { AppFooter } from '@/components/core/app-footer'

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
