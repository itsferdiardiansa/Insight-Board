'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaMoneyCheck } from 'react-icons/fa'
import { cn } from '@/utils/tailwind'
import { BsTrash2 } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import { PaymentModal } from './PaymentModal'
import { paymentMethods } from '@/features/checkout/data/payment-methods'

export const PaymentDetails: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isEditMode, setEditMode] = useState(false)
  const [editingCardId, setEditingCardId] = useState<number | null>(null)

  const savedCards = useMemo(
    () => [
      {
        id: 1,
        type: 'Visa',
        last4: '1234',
        label: 'Personal',
        active: true,
        selected: true,
      },
      {
        id: 2,
        type: 'Mastercard',
        last4: '5678',
        label: 'Work',
        active: true,
        selected: false,
      },
    ],
    []
  )

  const handleAddPayment = () => {
    setEditingCardId(null)
    setEditMode(false)
    setModalOpen(true)
  }

  const handleEdit = (cardId: number) => {
    setEditingCardId(cardId)
    setEditMode(true)
    setModalOpen(true)
  }

  return (
    <div className="border border-stone-200 rounded-xl">
      <div className="flex justify-between gap-(--space-md) p-(--space-md)">
        <div className="flex flex-col gap-(--space-sm)">
          <h3 className="">
            Save a payment method to make future purchases faster and easier.
          </h3>
          <div className="flex gap-(--space-sm)">
            {paymentMethods.map((item, index) => {
              const Logo = item.logo
              return (
                <span
                  key={index}
                  className="flex items-center py-(--space-xs) px-(--space-sm) border border-stone-200 rounded-md overflow-hidden"
                >
                  <Logo className="w-8 h-6" />
                </span>
              )
            })}
          </div>
        </div>

        <div className="flex items-end">
          <Button icon={<FaMoneyCheck />} onClick={handleAddPayment}>
            Add Payment
          </Button>
        </div>

        <PaymentModal
          isOpen={isModalOpen}
          isEdit={isEditMode}
          onOpenChange={setModalOpen}
          card={savedCards.find(c => c.id === editingCardId) ?? null}
        />
      </div>

      <div className="border-t border-stone-200">
        <div className="px-(--space-md) divide-y divide-stone-200">
          {savedCards.map((card, index) => {
            const Logo = paymentMethods[card.id].logo
            const isInactive = !card.active

            return (
              <div
                key={index}
                className={cn(
                  'flex justify-between items-center p-(--space-md)',
                  isInactive && 'opacity-50 pointer-events-none'
                )}
              >
                <div className="flex items-center gap-4">
                  <Logo className="w-8 h-6" />
                  <div>
                    <p className="font-bold">
                      {card.type} •••• {card.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {card.label}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant={card.selected ? 'secondary' : 'ghost'}
                  >
                    {card.selected ? 'Selected' : 'Select'}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    title="Edit"
                    onClick={() => handleEdit(card.id)}
                  >
                    <BiPencil className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" title="Delete">
                    <BsTrash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
