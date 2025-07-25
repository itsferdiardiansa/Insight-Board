import {
  PaymentMethodId,
  PaymentGroupId,
  PaymentMethodIdType,
} from '@/constants/payment'

import VisaLogo from '@/assets/logo/payments/visa.svg'
import MastercardLogo from '@/assets/logo/payments/mastercard.svg'
import PaypalLogo from '@/assets/logo/payments/paypal.svg'
import GooglePayLogo from '@/assets/logo/payments/google-pay.svg'
import AchLogo from '@/assets/logo/payments/ach.svg'
import AmericanExpressLogo from '@/assets/logo/payments/american-express.svg'
import JcbLogo from '@/assets/logo/payments/jcb.svg'
import UnionPayLogo from '@/assets/logo/payments/union-pay.svg'

export const paymentMethods = [
  { id: PaymentMethodId.VISA, meta: 'Visa', logo: VisaLogo },
  { id: PaymentMethodId.MASTERCARD, meta: 'Mastercard', logo: MastercardLogo },
  { id: PaymentMethodId.PAYPAL, meta: 'Paypal', logo: PaypalLogo },
  { id: PaymentMethodId.GOOGLE_PAY, meta: 'Google Pay', logo: GooglePayLogo },
  { id: PaymentMethodId.UNION_PAY, meta: 'Union Pay', logo: UnionPayLogo },
  {
    id: PaymentMethodId.AMEX,
    meta: 'American Express',
    logo: AmericanExpressLogo,
  },
  { id: PaymentMethodId.JCB, meta: 'Jcb', logo: JcbLogo },
  { id: PaymentMethodId.ACH, meta: 'Ach', logo: AchLogo },
]

export const groupedPaymentMethods = {
  [PaymentGroupId.BANK]: paymentMethods.filter(
    m =>
      ![PaymentMethodId.PAYPAL, PaymentMethodId.GOOGLE_PAY].includes(
        m.id as Extract<PaymentMethodIdType, 'paypal' | 'google-pay'>
      )
  ),
  [PaymentGroupId.PAYPAL]: paymentMethods.filter(
    m => m.id === PaymentMethodId.PAYPAL
  ),
  [PaymentGroupId.GOOGLE_PAY]: paymentMethods.filter(
    m => m.id === PaymentMethodId.GOOGLE_PAY
  ),
}

export const paymentOptions = groupedPaymentMethods[PaymentGroupId.BANK].map(
  ({ id, meta }) => ({
    value: id,
    label: meta,
  })
)
