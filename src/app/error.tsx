'use client'
import { ErrorDisplay } from '@/components/core/error'

export default function ErrorPage() {
  return (
    <div className="h-screen">
      <ErrorDisplay
        title="Something went wrong"
        subTitle="An unexpected error occurred while processing your request. Please try again later or contact support."
        pageType="error"
        isRounded={false}
      />
    </div>
  )
}
