import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { MaskedInput } from '../MaskedInput'

const meta: Meta<typeof MaskedInput> = {
  title: 'UI/Form/MaskedInput',
  component: MaskedInput,
  tags: ['dev'],
  argTypes: {
    maskPreset: {
      control: 'select',
      options: ['card16', 'expiryMMYY', 'cvc3', 'phoneUS', 'phoneIntlLite'],
      description: 'Predefined mask patterns for common input types.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    inputMode: {
      control: 'select',
      options: ['text', 'numeric', 'tel', 'email', 'url'],
      description:
        'Hints at the type of data that might be entered by the user while editing the element or its contents.',
      table: {
        type: { summary: 'text | numeric | tel | email | url' },
        defaultValue: { summary: 'text' },
      },
    },
    autoComplete: {
      control: 'text',
      description:
        'Indicates whether the value of the control can be automatically completed by the browser.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    placeholder: {
      control: 'text',
      description:
        'Provides a hint to the user of what can be entered in the field.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    rawValue: {
      control: 'text',
      description:
        'The unformatted value of the input, useful for controlled components.',
    },
    onRawChange: {
      action: 'rawValue changed',
      description:
        'Callback function that is called when the raw (unformatted) value changes.',
      table: { type: { summary: 'function' } },
    },
    label: {
      control: 'text',
      description: 'The label for the input field.',
      table: { type: { summary: 'string' } },
    },
    mask: {
      control: 'text',
      description:
        'Custom mask pattern using 0 for digits, A for letters, and * for alphanumeric characters.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A text input component that supports input masking for various formats like credit cards, phone numbers, etc.',
      },
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

export const ExpiryDate: Story = {
  args: {
    label: 'Expiry (MM/YY)',
    maskPreset: 'expiryMMYY',
    inputMode: 'numeric',
    autoComplete: 'cc-exp',
    placeholder: '2222 2222 2222 2222',
  },
}

export const CVCCode: Story = {
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
