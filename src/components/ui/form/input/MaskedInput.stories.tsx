import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { MaskedInput } from './MaskedInput'

const meta: Meta<typeof MaskedInput> = {
  title: 'UI/Form/MaskedInput',
  component: MaskedInput,
  argTypes: {
    maskPreset: {
      control: 'select',
      options: ['card16', 'expiryMMYY', 'cvc3', 'phoneUS', 'phoneIntlLite'],
    },
  },
}
export default meta

type Story = StoryObj<typeof MaskedInput>

export const CreditCard: Story = {
  args: {
    label: 'Card Number',
    maskPreset: 'card16',
    inputMode: 'numeric',
    autoComplete: 'cc-number',
  },
}

export const Expiry: Story = {
  args: {
    label: 'Expiry (MM/YY)',
    maskPreset: 'expiryMMYY',
    inputMode: 'numeric',
    autoComplete: 'cc-exp',
    placeholder: '2222 2222 2222 2222',
  },
}

export const CVC: Story = {
  args: {
    label: 'CVC',
    maskPreset: 'cvc3',
    inputMode: 'numeric',
    autoComplete: 'cc-csc',
  },
}

export const PhoneUS: Story = {
  args: {
    label: 'Phone',
    maskPreset: 'phoneUS',
    inputMode: 'tel',
    autoComplete: 'tel',
  },
}

export const ControlledExample: Story = {
  render: () => {
    const [raw, setRaw] = useState('')
    return (
      <div className="max-w-sm space-y-4">
        <MaskedInput
          label="Card Number"
          maskPreset="card16"
          rawValue={raw}
          onRawChange={setRaw}
        />
        <p className="text-xs text-gray-500">Raw: {raw}</p>
      </div>
    )
  },
}
