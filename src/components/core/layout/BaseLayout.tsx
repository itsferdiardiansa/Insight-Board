import { Fragment, PropsWithChildren } from 'react'
import { AppHeader } from '../app-header'
import { AppFooter } from '../app-footer'

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <AppHeader />
      <main className="main-app">{children}</main>
      <AppFooter />
    </Fragment>
  )
}
