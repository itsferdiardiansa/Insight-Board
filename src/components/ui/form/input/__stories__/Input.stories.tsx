import type { Meta, StoryObj } from '@storybook/nextjs'
import { Input } from '../Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Form/Input',
  component: Input,
  tags: ['dev'],
  argTypes: {
    fullWidth: {
      control: 'boolean',
      type: 'boolean',
      description:
        'Determines if the input should take up the full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'search'],
      description: 'The type of input',
      table: {
        type: { summary: 'text | password | number | search' },
        defaultValue: { summary: 'text' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Determines if the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Determines if the input is read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Determines if the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    label: {
      control: 'text',
      description: 'The label for the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    inputSize: 'md',
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Text',
    placeholder: 'Enter text',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Number',
    placeholder: 'Enter number',
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Enter search term',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full Width',
    placeholder: 'Full width input',
  },
}

export const Required: Story = {
  args: {
    required: true,
    label: 'Required',
    placeholder: 'Required input',
  },
}

export const Small: Story = {
  args: {
    inputSize: 'sm',
    label: 'Small',
    placeholder: 'Small input',
  },
}

export const Medium: Story = {
  args: {
    inputSize: 'md',
    label: 'Medium',
    placeholder: 'Medium input',
  },
}

export const Large: Story = {
  args: {
    inputSize: 'lg',
    label: 'Large',
    placeholder: 'Large input',
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    label: 'Read Only',
    placeholder: 'Read-only input',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
    placeholder: 'Disabled input',
  },
}

export const Playground: Story = {
  args: {},
}
