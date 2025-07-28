'use client'

import { type ChangeEvent } from 'react'
import Link from 'next/link'
import {
  RiCalendarEventLine,
  RiPriceTag3Line,
  RiRefund2Line,
  RiShieldKeyholeLine,
} from 'react-icons/ri'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RadioGroup, Radio, Select } from '@/components/ui/form'
import { Alert } from '@/components/ui/alert'
import { currencyOptions, CurrencyValues } from '@/constants/currency'
import { BILLING_TAX } from '@/constants/billing'
import { useCheckout } from '@/context/checkout/CheckoutContext'
import { BillingCycle } from '@/types/billing-info'
import { cn } from '@/utils/tailwind'
import { formatCurrency } from '@/utils/number-formatter'

type RowProps = {
  label: React.ReactNode
  value: React.ReactNode
  valueClass?: string
}

const Row: React.FC<RowProps> = ({ label, value, valueClass }) => (
  <div className="flex justify-between mb-2 last:mb-0 text-lg font-semibold">
    <span className="text-gray-600">{label}</span>
    <span className={cn('font-bold', valueClass)}>{value}</span>
  </div>
)

type TrustRowProps = {
  icon: React.ReactNode
  text: React.ReactNode
}

const TrustRow: React.FC<TrustRowProps> = ({ icon, text }) => (
  <div className="flex items-center">
    <span className="mr-2">{icon}</span>
    <span className="text-sm text-gray-600">{text}</span>
  </div>
)

type OrderSummaryProps = {
  isCompleteDisabled?: boolean
  onComplete?: () => void
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  isCompleteDisabled,
  onComplete,
}) => {
  const {
    step,
    plan: {
      currency,
      billingCycle,
      selected,
      setBillingCycle,
      setCurrency,
      isAnnual,
      annualSavings,
      unitPrice,
      subtotal,
      discountAmount,
      taxAmount,
      total,
    },
  } = useCheckout()

  const billingLabel = isAnnual ? 'Annual' : 'Monthly'
  const buttonLabel =
    step.current === 2 ? 'Complete Payment' : 'Continue to Next Step'

  const handleBillingChange = (val: string) =>
    setBillingCycle(val as BillingCycle)
  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setCurrency(e.target.value as CurrencyValues)

  return (
    <div className="flex flex-col gap-(--space-md)">
      <div className="border-b border-stone-200 pb-(--space-md)">
        <div className="flex justify-between items-center mb-(--space-md)">
          <h3 className="text-4xl font-black text-neutral-800">
            Your new subscription
          </h3>

          <Select
            options={[...currencyOptions]}
            defaultValue="usd"
            onChange={handleCurrencyChange}
            label="Currency"
          />
        </div>

        <div className="flex items-center gap-(--space-md)">
          <RadioGroup
            value={billingCycle}
            onChange={handleBillingChange}
            name="billingCycle"
          >
            <Radio label="Monthly" value="monthly" />
            <Radio
              value="annual"
              label={
                <>
                  Annual
                  <Badge variant="primary" size="xs" className="ml-2">
                    Save 15%
                  </Badge>
                </>
              }
            />
          </RadioGroup>
        </div>
      </div>

      {/* Selected Plan */}
      {selected && (
        <div className="pb-4 border-b border-stone-200">
          <Row label="Selected Plan" value={selected.title} />
          <Row label="Price" value={formatCurrency(unitPrice, currency)} />
          <Row label="Billing Cycle" value={billingLabel} />
        </div>
      )}

      <div className="pb-6 border-b border-stone-200">
        <Row label="Subtotal" value={formatCurrency(subtotal, currency)} />
        {discountAmount > 0 && (
          <Row
            label="Discount"
            value={`-${formatCurrency(discountAmount, currency)}`}
            valueClass="text-green-600"
          />
        )}
        <Row
          label={`Tax (${BILLING_TAX * 100}%)`}
          value={`+${formatCurrency(taxAmount, currency)}`}
          valueClass="text-red-600"
        />
      </div>

      <div className="flex justify-between mb-6 text-3xl">
        <span className="font-bold">{billingLabel} Total</span>
        <span className="font-bold">{formatCurrency(total, currency)}</span>
      </div>

      {isAnnual && annualSavings > 0 && (
        <Alert
          variant="secondary"
          message={
            <div className="flex gap-(--space-md)">
              <RiPriceTag3Line className="text-xl shrink-0 mt-[2px]" />
              <span>
                Your savings{' '}
                <strong>{formatCurrency(annualSavings, currency)}</strong>{' '}
                <span className="opacity-80">
                  → compared to paying monthly.
                </span>
              </span>
            </div>
          }
        />
      )}

      <Button fullWidth disabled={isCompleteDisabled} onClick={onComplete}>
        {buttonLabel}
      </Button>

      <div className="border-t border-stone-200 py-(--space-md)">
        <div className="space-y-4">
          <TrustRow
            icon={<RiShieldKeyholeLine className="h-5 w-5 text-green-500" />}
            text="Secure 256-bit SSL encryption"
          />
          <TrustRow
            icon={<RiRefund2Line className="h-5 w-5 text-green-500" />}
            text="14-day money-back guarantee"
          />
          <TrustRow
            icon={<RiCalendarEventLine className="h-5 w-5 text-green-500" />}
            text="Cancel anytime"
          />
        </div>

        <p className="text-sm text-neutral-500 mt-(--space-md) text-center">
          By completing your purchase you agree to our{' '}
          <Link href="#" className="text-(--primary) hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-(--primary) hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
