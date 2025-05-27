import Link from 'next/link'
import DefaultBrandLogo from '@/assets/brand/default-logo.svg'

export const BrandLogo = () => {
  return (
    <Link href={'/'}>
      <DefaultBrandLogo className="w-24 md:w-32" />
    </Link>
  )
}
