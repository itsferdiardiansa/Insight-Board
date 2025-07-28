import Link from 'next/link'
import DefaultBrandLogo from '@/assets/logo/brand/default-logo.svg'

export const BrandLogo = () => {
  return (
    <Link href={'/'} aria-label="Homepage">
      <DefaultBrandLogo className="w-24 md:w-32" />
    </Link>
  )
}
