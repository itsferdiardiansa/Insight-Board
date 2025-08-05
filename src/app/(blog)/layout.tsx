'use client'

import { BaseLayout } from '@/components/layout'
import { Alert } from '@/components/ui/alert'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Fragment } from 'react'

const ArticleLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isMdUp = useBreakpoint('md')

  return (
    <Fragment>
      <Alert
        variant="warning"
        rounded="none"
        size={isMdUp ? 'lg' : 'md'}
        closable
        message={
          <div className="text-center">
            <p className="text-base md:text-xl">
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
