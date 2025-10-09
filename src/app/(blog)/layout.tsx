'use client'

import { BaseLayout } from '@/components/layout'
import { Alert } from '@/components/ui/alert'
import { Fragment } from 'react'

const ArticleLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Alert
        variant="warning"
        rounded="none"
        size="md"
        closable
        message={
          <div className="text-center">
            <p className="text-body-md">
              Looking to build better employee experiences?
            </p>
          </div>
        }
      />
      <BaseLayout>{children}</BaseLayout>
    </Fragment>
  )
}

export default ArticleLayout
