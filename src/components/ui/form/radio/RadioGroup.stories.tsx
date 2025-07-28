import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroup } from './RadioGroup'
import { Radio } from './Radio'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
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
