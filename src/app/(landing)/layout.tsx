import * as React from 'react'
import { BaseLayout } from '@/components/core/layout'
import './landing.css'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default MainLayout
