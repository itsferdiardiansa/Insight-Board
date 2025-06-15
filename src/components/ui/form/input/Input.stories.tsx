import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Default',
    type: 'text',
  },
  argTypes: {
    fullWidth: {
      control: 'boolean',
      type: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    required: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

export const Playground: StoryObj<typeof Input> = {}
