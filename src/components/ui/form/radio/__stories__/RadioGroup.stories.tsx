import type { Meta, StoryObj } from '@storybook/nextjs'
import { useState } from 'react'
import { RadioGroup } from '../RadioGroup'
import { Radio } from '../Radio'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Form/RadioGroup',
  component: RadioGroup,
  tags: ['dev'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The currently selected value in the radio group.',
      table: { type: { summary: 'string' } },
    },
    onChange: {
      action: 'value changed',
      description:
        'Callback function that is called when the selected value changes.',
      table: { type: { summary: 'function' } },
    },
    name: {
      control: 'text',
      description:
        'The name attribute for the radio inputs, used for form submission.',
      table: { type: { summary: 'string' } },
    },
    className: {
      control: 'text',
      description:
        'Additional CSS classes to apply to the radio group container.',
      table: { type: { summary: 'string' } },
    },
  },
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('monthly')

    return (
      <RadioGroup value={value} onChange={setValue} name="billingCycle">
        <Radio label="Monthly" value="monthly" />
        <Radio label="Yearly" value="yearly" />
        <Radio label="Lifetime" value="lifetime" />
      </RadioGroup>
    )
  },
}
