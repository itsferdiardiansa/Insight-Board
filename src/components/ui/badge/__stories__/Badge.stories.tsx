import type { Meta, StoryObj } from '@storybook/nextjs'
import { Badge } from '..'
import { FiUser, FiArrowRight } from 'react-icons/fi'
import {
  roundedMapKeys,
  sizeMapKeys,
  variantMapKeys,
} from '../../_utils/variants'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['dev'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variantMapKeys,
      description:
        'Visual style of the badge, reflecting different semantic purposes.',
      table: {
        type: { summary: variantMapKeys.join(' | ') },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: sizeMapKeys,
      description:
        'Defines the badge’s size to match different contexts (small, medium, or large).',
      table: {
        type: { summary: sizeMapKeys.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    rounded: {
      control: { type: 'radio' },
      options: roundedMapKeys,
      description:
        'Controls the border radius of the badge for square, subtle rounding, or fully pill-shaped badges.',
      table: {
        type: { summary: "'none' | 'sm' | 'md' | 'full'" },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      control: { type: 'select' },
      options: ['none', 'user', 'arrow'],
      description: 'Optional icon to display inside the badge.',
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
      table: {
        type: { summary: 'ReactNode | null' },
        defaultValue: { summary: 'null' },
      },
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description:
        'Determines whether the icon (if provided) is placed before or after the badge label.',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: 'text',
      description: 'The badge label or content.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: "'Feature'" },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Feature',
    icon: null,
    iconPosition: 'left',
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
}

export const OutlineVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-2">
      <Badge variant="outlinePrimary">Outline Primary</Badge>
      <Badge variant="outlineSecondary">Outline Secondary</Badge>
      <Badge variant="outlineSuccess">Outline Success</Badge>
      <Badge variant="outlineInfo">Outline Info</Badge>
      <Badge variant="outlineWarning">Outline Warning</Badge>
      <Badge variant="outlineDestructive">Outline Destructive</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 [&>*]:self-end">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge rounded="none">None</Badge>
      <Badge rounded="sm">Small</Badge>
      <Badge rounded="md">Medium</Badge>
      <Badge rounded="full">Full</Badge>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge icon={<FiUser />} iconPosition="left">
        User
      </Badge>
      <Badge icon={<FiArrowRight />} iconPosition="right">
        Arrow
      </Badge>
    </div>
  ),
}
