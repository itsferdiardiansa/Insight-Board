'use client'
import { CheckoutProvider } from '@/context/checkout/CheckoutProvider'
import { PlainLayout } from '@/components/layout'
import { CheckoutProgress } from './_components/checkout-progress'

const AccountLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <CheckoutProvider>
      <PlainLayout>
        <PlainLayout.Header>
          <CheckoutProgress />
        </PlainLayout.Header>

        {children}
      </PlainLayout>
    </CheckoutProvider>
  )
}

export default AccountLayout
