import type { BillingCycle } from '@/types/billing-info'

export const BILLING_DISCOUNTS: Record<BillingCycle, number> = {
  monthly: 0,
  annual: 0.15,
} as const

export const BILLING_TAX: number = 0.05
