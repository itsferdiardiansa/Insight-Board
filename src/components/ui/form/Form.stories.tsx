'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { Form } from './Form'
import { Input, Select, MaskedInput } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone number'),
  country: z.string().min(1, 'Please select a country'),
})

type FormData = z.infer<typeof schema>

const meta: Meta<typeof Form> = {
  title: 'UI/Form',
  component: Form,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Form>

export const FormBasic: Story = {
  render: () => {
    const methods = useForm<FormData>({
      resolver: zodResolver(schema),
    })

    return (
      <Form
        className="flex flex-col gap-(--space-md)"
        form={methods}
        onSubmit={(data: FormData) => alert(JSON.stringify(data, null, 2))}
      >
        <Form.Item name="name">
          <Input label="Full Name" />
        </Form.Item>

        <Form.Item name="email">
          <Input label="Email Address" />
        </Form.Item>

        <Form.Item name="phone">
          <MaskedInput mask="999-999-9999" label="Phone Number" />
        </Form.Item>

        <Form.Item name="country">
          <Select
            label="Select Country"
            options={[
              { label: 'Indonesia', value: 'id' },
              { label: 'Singapore', value: 'sg' },
            ]}
          />
        </Form.Item>

        <Button type="submit">Submit</Button>
      </Form>
    )
  },
}
