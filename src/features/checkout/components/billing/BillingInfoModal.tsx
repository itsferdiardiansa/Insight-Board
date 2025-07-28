'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { Input, MaskedInput } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { IoCloseOutline } from 'react-icons/io5'

type BillingInfoModalProps = {
  isEdit?: boolean
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export const BillingInfoModal: React.FC<BillingInfoModalProps> = ({
  isOpen,
  isEdit = false,
  onOpenChange,
}) => {
  const [open, setOpen] = useState(isOpen ?? false)

  useEffect(() => {
    setOpen(isOpen ?? false)
  }, [isOpen])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-xl focus:outline-none">
          <Dialog.Description className="sr-only">
            {isEdit ? 'Edit' : 'Add'} billing information using the form below.
          </Dialog.Description>

          <div className="flex items-start justify-between">
            <Dialog.Title className="text-lg font-bold">
              {isEdit ? 'Edit Billing Info' : 'Add Billing Info'}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                <IoCloseOutline className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <form className="space-y-4">
            <Input label="Company Name" value="Acme Corporation" />
            <MaskedInput
              label="Tax ID (NPWP)"
              mask="99.999.999.9-999.999"
              value="999999999999999"
            />
            <Input label="Business Registration" value="SIUP-FAKE-202507" />
            <Input label="Email" type="email" value="billing@example.com" />
            <MaskedInput
              label="Phone"
              type="tel"
              maskPreset="phoneIntlLite"
              value="12345"
            />
            <Input
              label="Address"
              value="123 Fictional Street, Block A-1, Imaginaria City, 00000"
            />
            <Input label="Country" value="Konoha" />
          </form>

          <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <Dialog.Close asChild>
              <Button variant="outlineSecondary">Cancel</Button>
            </Dialog.Close>
            <Button
              variant="primary"
              onClick={() => {
                setOpen(false)
              }}
            >
              {isEdit ? 'Save Changes' : 'Save Billing Info'}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
