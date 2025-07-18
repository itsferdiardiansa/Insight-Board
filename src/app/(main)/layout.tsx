import { BaseLayout } from '@/components/layout'
import './landing.css'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default MainLayout
