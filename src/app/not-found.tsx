import { ErrorDisplay } from '@/components/feedback'
import { BaseLayout } from '@/components/layout'
import { SectionShell } from '@/components/layout/sections'
import { Newsletter } from '@/features/newsletter/components/Newsletter'

export default function NotFoundPage() {
  return (
    <BaseLayout>
      <div className="layout-wrapper section-stack">
        <SectionShell direction="col">
          <div className="h-[calc(100vh-200px)] flex justify-center items-center">
            <ErrorDisplay
              title="Page not found"
              subTitle="We couldn't find the insights you're looking for. The page you requested doesn't exist."
              pageType="not-found"
            />
          </div>
        </SectionShell>

        <SectionShell direction="col">
          <Newsletter />
        </SectionShell>
      </div>
    </BaseLayout>
  )
}
