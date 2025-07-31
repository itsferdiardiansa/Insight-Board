'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export function CTAButton() {
  const isLgUp = useBreakpoint('lg')

  return (
    <Button
      className="flex-1"
      variant="secondary"
      rounded="full"
      size={isLgUp ? 'md' : 'sm'}
      asChild
    >
      <Link href="/signin">Get Started Free</Link>
    </Button>
  )
}
