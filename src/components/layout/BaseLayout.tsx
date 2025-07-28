import { Fragment, PropsWithChildren } from 'react'
import { AppHeader } from './app-header'
import { AppFooter } from './app-footer'

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <AppHeader />
      <main className="main-app pt-[54px] md:pt-[70px]">{children}</main>
      <AppFooter />
    </Fragment>
  )
}
