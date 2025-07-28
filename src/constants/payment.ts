export const PaymentMethodId = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  PAYPAL: 'paypal',
  GOOGLE_PAY: 'google-pay',
  UNION_PAY: 'union-pay',
  AMEX: 'amex',
  JCB: 'jcb',
  ACH: 'ach',
} as const

export type PaymentMethodIdType =
  (typeof PaymentMethodId)[keyof typeof PaymentMethodId]

export const PaymentGroupId = {
  BANK: 'bank',
  PAYPAL: 'paypal',
  GOOGLE_PAY: 'google-pay',
} as const

export type PaymentGroupIdType =
  (typeof PaymentGroupId)[keyof typeof PaymentGroupId]
export type NonBankType = Exclude<PaymentGroupIdType, 'bank'>

export const paymentOptions = [
  { value: PaymentGroupId.BANK, label: 'Bank' },
  { value: PaymentGroupId.PAYPAL, label: 'Paypal' },
  { value: PaymentGroupId.GOOGLE_PAY, label: 'Google Pay' },
]
