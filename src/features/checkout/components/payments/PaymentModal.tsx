'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { Input, MaskedInput, Select } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { IoCloseOutline } from 'react-icons/io5'
import { BsGoogle, BsPaypal } from 'react-icons/bs'
import { PaymentGroupId, paymentOptions } from '@/constants/payment'
import type { PaymentGroupIdType, NonBankType } from '@/constants/payment'

type PaymentModalProps = {
  isEdit?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  card?: {
    id: number
    type: string
    label: string
    last4: string
  } | null
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  isEdit = false,
  onOpenChange,
}) => {
  const [open, setOpen] = useState(isOpen ?? false)
  const [paymentSelectedId, setPaymentSelectedId] =
    useState<PaymentGroupIdType>(PaymentGroupId.BANK)

  useEffect(() => {
    setOpen(isOpen ?? false)

    return () => {
      setPaymentSelectedId(PaymentGroupId.BANK)
    }
  }, [isOpen])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-xl focus:outline-none">
          <Dialog.Description className="sr-only">
            Add or edit your payment method using the form below.
          </Dialog.Description>

          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-bold">
              {isEdit ? 'Edit' : 'Add a New'} Payment Method
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                <IoCloseOutline className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-4">
            <Select
              label="Payment Methods"
              value={paymentSelectedId}
              onChange={e =>
                setPaymentSelectedId(e.target.value as PaymentGroupIdType)
              }
              options={paymentOptions}
            />

            {paymentSelectedId === PaymentGroupId.PAYPAL && (
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold">
                  Connect your PayPal account to continue
                </h2>
                <Button className="bg-[#003087]" icon={<BsPaypal />}>
                  Connect
                </Button>
              </div>
            )}

            {paymentSelectedId === PaymentGroupId.GOOGLE_PAY && (
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold">
                  Connect your Google account to continue
                </h2>
                <Button className="bg-[#4285F4]" icon={<BsGoogle />}>
                  Connect
                </Button>
              </div>
            )}

            {![PaymentGroupId.PAYPAL, PaymentGroupId.GOOGLE_PAY].includes(
              paymentSelectedId as NonBankType
            ) && (
              <>
                <Input label="Card Holder Name" />
                <MaskedInput maskPreset="card16" label="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <MaskedInput maskPreset="expiryMMYY" label="Expiry Date" />
                  <MaskedInput maskPreset="cvc3" label="CVC" />
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <Dialog.Close asChild>
              <Button variant="outlineSecondary">Cancel</Button>
            </Dialog.Close>
            {paymentSelectedId === PaymentGroupId.BANK && (
              <Button
                variant="primary"
                onClick={() => {
                  // Handle submit logic here
                  setOpen(false)
                }}
              >
                {isEdit ? 'Save Changes' : 'Save Payment'}
              </Button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
