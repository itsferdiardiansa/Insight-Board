import type { Meta, StoryObj } from '@storybook/nextjs'
import { action } from 'storybook/actions'
import { FiUser, FiArrowRight } from 'react-icons/fi'
import { userEvent, within } from '@storybook/testing-library'
import { Button } from '..'
import { variantMapKeys, sizeMapKeys } from '../../_utils/variants'
import { Switch } from '../../switch'
import { useState } from 'react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['dev'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'outlinePrimary',
        'secondary',
        'outlineSecondary',
        'destructive',
        'outlineDestructive',
        'ghost',
      ],
      description:
        'Visual style of the button, reflecting different semantic purposes (e.g., primary for main actions, destructive for dangerous actions).',
      table: {
        type: { summary: variantMapKeys.join(' | ') },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description:
        'Defines the button’s size to match different contexts (small, medium, or large).',
      table: {
        type: { summary: sizeMapKeys.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    rounded: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'full'],
      description:
        'Controls the border radius of the button for square, subtle rounding, or fully pill-shaped buttons.',
      table: {
        type: { summary: "'none' | 'sm' | 'md' | 'full'" },
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description:
        'When true, the button expands to take up the full width of its parent container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description:
        'Shows a loading spinner and disables interaction when set to true.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing user interaction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description:
        'Determines whether the icon (if provided) is placed before or after the button label.',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'user', 'arrow'],
      mapping: {
        none: null,
        user: <FiUser />,
        arrow: <FiArrowRight />,
      },
      labels: {
        none: 'None',
        user: 'User Icon',
        arrow: 'Arrow Right Icon',
      },
      description: 'Optional icon to display inside the button.',
      table: {
        type: { summary: 'ReactNode | null' },
        defaultValue: { summary: 'null' },
      },
    },
    children: {
      control: 'text',
      description: 'The button label or content.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: "'Click me!'" },
      },
    },
    innerClassName: {
      control: 'text',
      description:
        'Custom class name applied to the inner content wrapper of the button (e.g., to override padding or spacing).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    asChild: {
      control: 'boolean',
      description:
        'Render the button as a child component using `Slot` (useful for integrating with other UI primitives).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Event handler triggered when the button is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Click me!',
    fullWidth: false,
    loading: false,
    icon: null,
    iconPosition: 'left',
    onClick: action('You clicked me!'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = await canvas.getByRole('button', { name: /click me/i })
    await userEvent.click(button)
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Solid: Story = {
  render: () => {
    return (
      <div className="flex gap-space-sm">
        <Button variant="primary" size="sm">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="destructive" size="sm">
          Destructive
        </Button>
        <Button variant="light" size="sm">
          Light
        </Button>
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
      </div>
    )
  },
}

export const Outline: Story = {
  render: () => {
    return (
      <div className="flex gap-space-sm">
        <Button variant="outlinePrimary" size="sm">
          Outline Primary
        </Button>
        <Button variant="outlineSecondary" size="sm">
          Outline Secondary
        </Button>
        <Button variant="outlineDestructive" size="sm">
          Outline Destructive
        </Button>
        <Button variant="outlineLight" size="sm">
          Outline Light
        </Button>
      </div>
    )
  },
}

export const Loading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <Switch
            defaultChecked
            onChange={checked => setIsLoading(checked)}
            checked={isLoading}
          />

          <p>Enable loading state</p>
        </div>

        <div className="self-start">
          <Button variant="primary" loading={isLoading}>
            Outline Primary
          </Button>
        </div>
      </div>
    )
  },
}
