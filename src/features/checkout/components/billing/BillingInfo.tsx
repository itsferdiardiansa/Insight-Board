'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaInfoCircle, FaEdit } from 'react-icons/fa'
import { BillingInfoModal } from './BillingInfoModal'

export const BillingInfo: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const [_, setEditingCardId] = useState<number | null>(null)

  const billingInfo = useMemo(
    () => ({
      companyName: 'Acme Corporation',
      taxId: 'NPWP 99.999.999.9-999.999',
      registrationNumber: 'SIUP-FAKE-202507',
      address: '123 Fictional Street, Block A-1, Imaginaria City, 00000',
      country: 'Konoha',
      email: 'billing@example.com',
      phone: '12345',
    }),
    []
  )

  const billingFields = useMemo(
    () => [
      { label: 'Company Name', value: billingInfo.companyName },
      { label: 'Tax ID (NPWP)', value: billingInfo.taxId },
      { label: 'Business Registration', value: billingInfo.registrationNumber },
      { label: 'Email', value: billingInfo.email },
      { label: 'Phone', value: billingInfo.phone },
      { label: 'Address', value: billingInfo.address, span: true },
      { label: 'Country', value: billingInfo.country },
    ],
    [billingInfo]
  )

  const handleAddPayment = () => {
    setEditingCardId(null)
    setEditMode(false)
    setModalOpen(true)
  }

  const handleEdit = () => {
    setEditingCardId(1)
    setEditMode(true)
    setModalOpen(true)
  }

  return (
    <div className="border border-stone-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6">
        <div className="flex">
          <h3 className="font-semibold">
            Add your fictional company&apos;s Tax ID or VAT number to appear on
            purchase receipts and invoices.
          </h3>
        </div>
        <div className="shrink-0">
          <Button icon={<FaInfoCircle />} onClick={handleAddPayment}>
            Add Info
          </Button>
        </div>
      </div>

      <div className="border-t border-stone-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-6 py-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-sm sm:text-[15px]">
          {billingFields.map(({ label, value, span }, idx) => (
            <div key={idx} className={span ? 'sm:col-span-2' : ''}>
              <dt className="text-neutral-500 dark:text-neutral-400 mb-1">
                {label}
              </dt>
              <dd className="text-neutral-900 dark:text-white font-medium">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex justify-end mt-10">
          <Button
            variant="ghost"
            size="sm"
            icon={<FaEdit />}
            onClick={handleEdit}
          >
            Edit Info
          </Button>
        </div>
      </div>

      <BillingInfoModal
        isOpen={isModalOpen}
        isEdit={isEditMode}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}
