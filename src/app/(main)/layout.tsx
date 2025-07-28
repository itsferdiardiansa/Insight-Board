import { BaseLayout } from '@/components/layout'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default MainLayout
